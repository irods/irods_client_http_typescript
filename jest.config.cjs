/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                useESM: true,
                isolatedModules: true,
            },
        ],
    },
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    testEnvironment: 'node',
    extensionsToTreatAsEsm: ['.ts'],
    setupFilesAfterEnv: ['./src/tests/setupTests.ts'],
}
