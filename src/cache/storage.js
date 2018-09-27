import Storage from 'react-native-storage';
import {AsyncStorage} from 'react-native';

const createStorage = () => {
	let storage    = new Storage({
		size          : 1000,
		storageBackend: AsyncStorage,
		defaultExpires: 1000 * 3600 * 24,
		enableCache   : true,
		sync          : {}
	});
	global.storage = storage;

	let _storage    = {
		save(key, obj) {
			storage.save({
				key : key,  // 注意: 请不要在key中使用_下划线符号!
				data: obj,
				// expires: defaultExpires   //  如果设为null，则永不过期 如果不指定过期时间，则会使用defaultExpires参数
			})
		},
		// 取数据
		load(key, callBack) {
			storage.load({
				key             : key,
				autoSync        : true,
				syncInBackground: true,
			}).then(ret => {
				callBack && callBack(ret);
				return ret
			}).catch(err => {
				callBack(null);
				return err;
			})
		},
		// !! 清除某个key下的所有数据(仅key-id数据)
		clearMapForKey(key) {
			storage.clearMapForKey(key)
		},
		// 删除单个数据
		remove(key) {
			storage.remove({
				key: key
			})
		},
		// !! 清空map，移除所有"key-id"数据（但会保留只有key的数据）
		clearMap() {
			storage.clearMap()
		}
	};
	global._storage = _storage;
};

export default createStorage;