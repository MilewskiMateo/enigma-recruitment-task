module.exports = {
  ...require('@airnauts/style-guide/prettier'),
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  printWidth: 120
};
