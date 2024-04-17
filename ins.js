const os = require('os');
const fs = require('fs');

const networkInterfaces = os.networkInterfaces();
const osType = function (){
    return 'Operating system: ' + ' ' + os.type();
};

const address = () => {
    const newLIst = ['rmnet_data1','rmnet_data2', 'Ethernet', 'Wi-Fi']
    newLIst.forEach(interfaceName=>{
        const interfaces = networkInterfaces[interfaceName]
        if(interfaces){
                const addSplit= interfaces[0].address
                //save IP address into 'info.txt'
                fs.appendFile('data.txt','User address: '+ addSplit+'\n', (err)=>{
                    if (err) throw err
                })
            console.log(`${interfaceName} connected`)
        }
    })
};address();
const all = osType()

//append os info to txt file
fs.appendFile('data.txt', all + '\n'+'\n', function (err) {
    if (err) throw err;
    console.log('file saved!!')
});