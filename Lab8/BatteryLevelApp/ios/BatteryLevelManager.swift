import Foundation
import React

@objc(BatteryLevelManager)
class BatteryLevelManager: NSObject {

    @objc static func requiresMainQueueSetup() -> Bool {
        return true
    }

    @objc func getBatteryLevel(_ callback: @escaping RCTResponseSenderBlock) {
        let batteryLevel = UIDevice.current.batteryLevel
        callback([batteryLevel >= 0 ? batteryLevel : -1]) // Si la batería no está disponible, retornamos -1
    }

    @objc func startMonitoringBatteryLevel() {
        UIDevice.current.isBatteryMonitoringEnabled = true
        NotificationCenter.default.addObserver(self,
                                               selector: #selector(batteryLevelChanged),
                                               name: UIDevice.batteryLevelDidChangeNotification,
                                               object: nil)
    }

    @objc func batteryLevelChanged() {
        let batteryLevel = UIDevice.current.batteryLevel
        if batteryLevel >= 0 {
            sendEvent(withName: "BatteryLevelChanged", body: ["batteryLevel": batteryLevel])
        }
    }

    @objc func stopMonitoringBatteryLevel() {
        NotificationCenter.default.removeObserver(self,
                                                  name: UIDevice.batteryLevelDidChangeNotification,
                                                  object: nil)
    }

    @objc func sendEvent(withName name: String, body: [String: Any]) {
        if let bridge = self.bridge {
            bridge.eventDispatcher().sendAppEvent(withName: name, body: body)
        }
    }
}