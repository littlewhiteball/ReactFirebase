export const CompetitionVisibilityEnum = Object.freeze({
    PRIVATE: Symbol('Private'),
    PUBLIC: Symbol('Public'),
});

export const getText = (enumValue) => {
    switch (enumValue) {
        case CompetitionVisibilityEnum.PRIVATE: {
            return 'Private';
        }

        case CompetitionVisibilityEnum.PUBLIC: {
            return 'Public';
        }

        default: {
            throw new Error(`Specified enum value ${enumValue.toString()} is not supported by CompetitionVisibilityEnum`);
        }
    }
};
