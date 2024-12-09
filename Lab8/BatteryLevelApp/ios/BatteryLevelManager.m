#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(BatteryLevelManager, NSObject)

RCT_EXTERN_METHOD(getBatteryLevel:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(startMonitoringBatteryLevel)
RCT_EXTERN_METHOD(stopMonitoringBatteryLevel)

@end