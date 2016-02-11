function item(sponsor) {
    return {
        'a': {
            title: sponsor.name,
            href: sponsor.url
        },
        'img': {
            src: sponsor.img,
            alt: sponsor.name
        }
    }
};

module.exports = function(sponsors) {
    var a = sponsors.map(item);
    return a;
}
