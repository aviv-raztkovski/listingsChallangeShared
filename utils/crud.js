let entries = require('../DummyData');

console.log(entries[1]);

module.exports.createListing = function (details) {
    const lastIndex = entries[entries.length - 1];
    const newEntrie = {
        id: lastIndex + 1,
        isFeatured: details.isFeatured,
        listingTitle: details.listingTitle,
        listedCompany: details.listedCompany,
        listingLocation: details.listedLocation,
        timeRegistered: details.timeRegistered,
        listingType: details.listingType,
        role: details.role,
        level: details.level,
        languages: details.languages,
        tools: details.tools
    }

    entries.push(newEntrie);
}

module.exports.getListing = function (searchParams) {

}

module.exports.editListings = function (id, newDetails) {

}

module.exports.deleteListing = function (id) {
    const delIndex = entries.find(entrie => entrie.id == id);
    if (!delIndex) {
        return { status: 404, message: "Listing Not Found" };
    }
    entries.splice(delIndex, 1);

    return { status: 200, message: "Listing Deleted"}
}
/*
----------------
utils/crud.js::
----------------

API calls:

  CreateListing
  GetListing
  EditListing
  DeleteListings
*/