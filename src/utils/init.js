import { Platform, Dimensions } from 'react-native';
import deviceInfo from 'react-native-device-info';
import createStorage from "../cache/storage";
// iPhoneX
const X_WIDTH       = 375;
const X_HEIGHT      = 812;
// screen
const SCREEN_WIDTH  = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const createDevice = () => {
	let device                = {};
	device.ApiLevel           = deviceInfo.getAPILevel();            // 获取API级别
	device.AppName            = deviceInfo.getApplicationName();     // 获取应用程序名称
	device.BatteryLevel       = deviceInfo.getBatteryLevel();        // 获取设备的电池电量为浮点数，介于0和1之间
	device.DeviceBrand        = deviceInfo.getBrand();               // 获取设备品牌
	device.BuildNumber        = deviceInfo.getBuildNumber();         // 获取应用程序内部版本号
	device.BundleId           = deviceInfo.getBundleId();            // 获取应用程序包标识符
	device.Carrier            = deviceInfo.getCarrier();             // 获取运营商名称（网络运营商）
	device.DeviceCountry      = deviceInfo.getDeviceCountry();       // 根据区域设置信息获取设备国家/地区
	device.DeviceId           = deviceInfo.getDeviceId();            // 获取设备ID
	device.DeviceLocale       = deviceInfo.getDeviceLocale();        // 获取设备区域设置
	device.DeviceName         = deviceInfo.getDeviceName();          // 获取设备名称
	device.FirstInstallTime   = deviceInfo.getFirstInstallTime();    // 获取首次安装应用程序的时间（以毫秒为单位）
	device.FontScale          = deviceInfo.getFontScale();           // 获取设备字体比例
	device.FreeDiskStorage    = deviceInfo.getFreeDiskStorage();     // 获取可用的存储大小，以字节为单位
	device.IPAddress          = deviceInfo.getIPAddress();           // 获取设备当前的IP地址
	device.InstallReferrer    = deviceInfo.getInstallReferrer();     // 在应用程序安装时获取referrer字符串。
	device.InstanceID         = deviceInfo.getInstanceID();          // 获取应用程序实例ID
	device.LastUpdateTime     = deviceInfo.getLastUpdateTime();      // 获取应用上次更新的时间（以毫秒为单位）
	device.MACAddress         = deviceInfo.getMACAddress();          // 获取网络适配器MAC地址
	device.Manufacturer       = deviceInfo.getManufacturer();        // 获取设备制造商
	device.MaxMemory          = deviceInfo.getMaxMemory();           // 返回VM将尝试使用的最大内存量（以字节为单位）
	device.DeviceModel        = deviceInfo.getModel();               // 获取设备模型
	device.PhoneNumber        = deviceInfo.getPhoneNumber();         // 获取设备电话号码
	device.AppReadableVersion = deviceInfo.getReadableVersion();     // 获取应用程序的人类可读版本
	device.SerialNumber       = deviceInfo.getSerialNumber();        // 获取设备序列号
	device.SystemName         = deviceInfo.getSystemName();          // 获取设备操作系统名称
	device.SystemVersion      = deviceInfo.getSystemVersion();       // 获取设备操作系统版本
	// device.TimeZone              = deviceInfo.getTimeZone();            // 获取设备默认时区
	device.TotalDiskCapacity     = deviceInfo.getTotalDiskCapacity();   // 获取完整磁盘存储大小（以字节为单位）
	device.TotalMemory           = deviceInfo.getTotalMemory();         // 获取设备总内存，以字节为单位。
	device.UniqueID              = deviceInfo.getUniqueID();            // 获取设备唯一ID。
	device.UserAgent             = deviceInfo.getUserAgent();           // 获取设备用户代理
	device.AppVersion            = deviceInfo.getVersion();             // 获取应用程序版本
	device.is24Hour              = deviceInfo.is24Hour();               // 判断用户首选项是否设置为24小时格式
	device.isEmulator            = deviceInfo.isEmulator();             // 判断应用程序是否在模拟器中运行。
	device.isPinOrFingerprintSet = deviceInfo.isPinOrFingerprintSet();  // 判断是否为设备设置了PIN码或指纹
	device.isTablet              = deviceInfo.isTablet();               // 判断设备是否为平板电脑
	global.device                = device;
};

const isIphoneX = () => {
	global.isIphoneX = (Platform.OS === 'ios' && ((SCREEN_HEIGHT === X_HEIGHT && SCREEN_WIDTH === X_WIDTH) || (SCREEN_HEIGHT === X_WIDTH && SCREEN_WIDTH === X_HEIGHT)))
};

const init = () => {
	createStorage();
	createDevice();
	isIphoneX();
};


export default init;
