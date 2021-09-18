import localForage from 'localforage';
import { isEmpty } from './helper';

const settings: { forage: any } = {
  forage: {
    storeName: 'Podberu',
    name: 'Podberu Application Storage',
    version: 1,
    description: 'Storage for Podberu',
  },
};

const configureForage = () => {
  localForage.config(settings.forage);

  return localForage;
};

/**
 * createNewStore
 *
 * create new database and/or store
 * @param config { storeName: string, name: string, version: number, description: string }
 * @returns {Promise<any>}
 */
const createNewStore = (config: {
  storeName: string;
  name: string;
  version: number;
  description: string;
}) => {
  return localForage.createInstance(config);
};

/**
 * localGet
 *
 * get data from local storage based on 'key'
 * @param key
 * @returns {Promise<any>}
 */
const localGet = <Type>(key: string): Promise<Type | null> => {
  return localForage.getItem<Type>(key);
};

/**
 * localSet
 *
 * set data in local storage based on 'key'
 * @param {{key: string; data: any}} obj
 * @returns {Promise<any>}
 */
const localUpdate = async (obj: { key: string; data: any }) => {
  if (obj && obj.key) {
    const currentData: any = await localForage.getItem(obj.key);
    let newData;

    if (Array.isArray(obj.data)) {
      newData = [...currentData, ...obj.data];
    } else if (!isEmpty(currentData) && !isEmpty(obj.data)) {
      newData = { ...currentData, ...obj.data };
    } else {
      newData = obj.data;
    }

    return localForage.setItem(obj.key, newData);
  }
};

/**
 * localSet
 *
 * set data in local storage based on 'key'
 * @param {{key: string; data: any}} obj
 * @returns {Promise<any>}
 */
const localSet = (obj: { key: string; data: any }) => {
  if (obj && obj.key) {
    return localForage.setItem(obj.key, obj.data);
  }
};

/**
 * localRemove
 *
 * delete data from local storage based on 'key'
 * @param {string[]} keys
 * @returns {any}
 */
const localRemove = (keys: string[]) => {
  return Promise.all(keys.map((key) => localForage.removeItem(key)));
};

/**
 * localClear
 *
 * clear storage
 * @returns {Promise<void>}
 */
const localClear = () => {
  return localForage.clear();
};

export {
  localGet,
  localSet,
  localUpdate,
  localRemove,
  localClear,
  configureForage,
  createNewStore,
};
