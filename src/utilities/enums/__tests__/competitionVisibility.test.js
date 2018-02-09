import { CompetitionVisibilityEnum, getText, getKey } from './../competitionVisibility';

describe('competition visibility enum', () => {
    it('should return enum keys', () => {
        expect(Object.keys(CompetitionVisibilityEnum).sort()).toEqual(['PRIVATE', 'PUBLIC']);
    });

    it('should return enum values as symbols', () => {
        expect(CompetitionVisibilityEnum.PRIVATE.toString()).toBe('Symbol(Private)');
        expect(CompetitionVisibilityEnum.PUBLIC.toString()).toBe('Symbol(Public)');
    });

    it('should return enum text by getText', () => {
        expect(getText(CompetitionVisibilityEnum.PRIVATE)).toBe('Private');
        expect(getText(CompetitionVisibilityEnum.PUBLIC)).toBe('Public');
    });

    it('should throw when enum key is not supported', () => {
        expect(() => getText(Symbol('NotSupported'))).toThrowError('Specified enum value Symbol(NotSupported) is not supported by CompetitionVisibilityEnum');
        expect(() => getText(Symbol('NotSupported'))).toThrowError(Error);
    });

    it('should return enum key by getKey', () => {
        expect(getKey('Private')).toBe(CompetitionVisibilityEnum.PRIVATE);
        expect(getKey('Public')).toBe(CompetitionVisibilityEnum.PUBLIC);
    });

    it('should throw when enum text is not supported', () => {
        expect(() => getKey('NotSupported')).toThrowError('Specified enum text NotSupported is not supported by CompetitionVisibilityEnum');
        expect(() => getKey('NotSupported')).toThrowError(Error);
    });

    it('should match when enum key is equal', () => {
        expect(CompetitionVisibilityEnum.PRIVATE).toEqual(CompetitionVisibilityEnum.PRIVATE);
        expect(CompetitionVisibilityEnum.PUBLIC).toEqual(CompetitionVisibilityEnum.PUBLIC);
    });

    it('should not match when enum key is not equal', () => {
        expect(CompetitionVisibilityEnum.PRIVATE === CompetitionVisibilityEnum.PUBLIC).toBe(false);
    });
});
