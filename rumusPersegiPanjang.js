// rumus luas dan keliling persegi panjang
exports.persegiPanjang = function(panjang, lebar) {
    return {
        luas: panjang * lebar,
        keliling: 2 * (panjang + lebar)
    };
};