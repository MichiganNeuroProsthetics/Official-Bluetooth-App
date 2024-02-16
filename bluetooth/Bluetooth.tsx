import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { BleManager, Device } from 'react-native-ble-plx';

const Bluetooth = () => {
    const [devices, setDevices] = useState<Device[]>([]);
    const [connectedDevice, setConnectedDevice] = useState<Device | null>(null);
    const manager = new BleManager();

    useEffect(() => {
        // Scan for BLE devices in range
        // Phone's Bluetooth is turned on and ready to scan
        const subscription = manager.onStateChange((state) => {
          if (state === 'PoweredOn') {
            scanForDevices();
            subscription.remove()
          }
        }, true);
        return () => {
            subscription.remove();
          };
    }, [manager]);
    
    const scanForDevices = async () => {
        try {
            const scanning = manager.startDeviceScan(
                null, // List of uuids. if null, scans for all devices. 
                null, // Scanning filters
                (error, scannedDevice) => {
                    if (error) {
                        console.error('Error finding devices:', error);
                        return;
                    }
                    // Check if device already in devices list. 
                    // If not, add to list of discovered devices
                    if (!devices.find((device) => device.id === scannedDevice.id)) {
                        setDevices((prevDevices) => [...prevDevices, scannedDevice])
                    }
                }
            );
        } catch (error) {
            console.error('Error starting scan:', error);
        }
    };

    const connectToDevice = async (device) => {
        try {
          await device.connect();
        // Attempts connection to device
          setConnectedDevice(device);
        } catch (error) {
          console.error('Error connecting: ', error);
        }
    };

    return (
        <View>
            <Text>Bluetooth Devices:</Text>
            {/* <FlatList
                data={devices}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <View>
                    <Text>{item.name || 'Unnamed Device'}</Text>
                    <Button title="Connect" onPress={() => connectToDevice(item)} />
                </View>
                )}
            /> */}
            {/* {connectedDevice && (
                <View>
                <Text>Connected to: {connectedDevice.name || 'Unnamed Device'}</Text>
                
                </View>
            )}; */}
            
        </View>
    );
};

export default Bluetooth;