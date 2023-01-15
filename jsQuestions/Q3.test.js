const {changeCapitalization,changeCapitalization2} = require('./Q3')

test('"MeRRy hAD a LITTle lAMp" must change to "mErrY Had A littLE LamP"', () =>{
    expect(changeCapitalization('MeRRy hAD a LITTle lAMp')).toBe('mErrY Had A littLE LamP');
});
test('"FOSID dasdf NDdsDfdssdSD" must change to "fosid DASDF ndDSdFDSSDsd"', () =>{
    expect(changeCapitalization('FOSID dasdf NDdsDfdssdSD')).toBe('fosid DASDF ndDSdFDSSDsd');
});



test('"MeRRy hAD a LITTle lAMp" must change to "mErrY Had A littLE LamP"', () =>{
    expect(changeCapitalization2('MeRRy hAD a LITTle lAMp')).toBe('mErrY Had A littLE LamP');
});
test('"FOSID dasdf NDdsDfdssdSD" must change to "fosid DASDF ndDSdFDSSDsd"', () =>{
    expect(changeCapitalization2('FOSID dasdf NDdsDfdssdSD')).toBe('fosid DASDF ndDSdFDSSDsd');
});