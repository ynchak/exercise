import _ from 'lodash';
import treeData from '../__fixtures__/tree.js';
import changeClass from '../changeClass.js';

test('changeClass', () => {
  const {
    htmlTreeSource,
    htmlTree,
    classNameFrom,
    classNameTo,
  } = treeData;
  const sourceCloned = _.cloneDeep(htmlTreeSource);

  const result = changeClass(htmlTreeSource, classNameFrom, classNameTo);
  expect(result).toEqual(htmlTree);
  expect(htmlTreeSource).toEqual(sourceCloned);
});
