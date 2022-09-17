const fs = require('fs')

let jsonString
let videoArray;
let firstSplit = [];
let containAddress = [];
let address = [];
let combinedAddress = [];

try {
    jsonString = fs.readFileSync('../assets/fetched_data/uploadedVideos.json', 'utf-8');
    videoArray = JSON.parse(jsonString)   
} catch (error) {
    console.log(error);
}

// Split by address
firstSplit = videoArray.map((video) => (
    video.snippet.description.split('ADDRESS: ')
))


// Delete description that has no address
Object.keys(firstSplit).forEach(key => {
    if(firstSplit[key] === undefined) {
        delete firstSplit[key];
    }
});

// Remove noise
containAddress = firstSplit.map((element) => (
    element.slice(1)
))

// Extract address
address = containAddress.map((item) => (
    item.map((arr) => (
        arr.split('\n')[0]
    ))
))

// Remove empty array
address = address.filter(item => {
    return item != null && item!= '';
})

// Combine address to an array
combinedAddress = Object.values(address).flat()

// Remove duplicate address
const uniqueAddress = [...new Set(combinedAddress)]

// Convert set to array
const uniqueAddressArr = Array.from(uniqueAddress)

export default uniqueAddressArr;