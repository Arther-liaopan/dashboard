import http from '@/utils/http';
import { awaitWrap } from '@/utils/utils';

export const updateConfigMap = async (cluster, namespace, name, data) => {
  const [err, result] = await awaitWrap(
    http({
      method: 'put',
      url: `/proxy/pixiu/${cluster}/api/v1/namespaces/${namespace}/configmaps/${name}`,
      data: data,
    }),
  );
  return [result, err];
};

export const getConfigMap = async (cluster, namespace, name) => {
  const [err, result] = await awaitWrap(
    http({
      method: 'get',
      url: `/proxy/pixiu/${cluster}/api/v1/namespaces/${namespace}/configmaps/${name}`,
    }),
  );
  return [result, err];
};

export const deleteConfigMap = async (cluster, namespace, name) => {
  const [err, result] = await awaitWrap(
    http({
      method: 'delete',
      url: `/proxy/pixiu/${cluster}/api/v1/namespaces/${namespace}/configmaps/${name}`,
    }),
  );
  return [result, err];
};

export const createConfigMap = async (cluster, namespace, data) => {
  const [err, result] = await awaitWrap(
    http({
      method: 'post',
      url: `/proxy/pixiu/${cluster}/api/v1/namespaces/${namespace}/configmaps`,
      data: data,
    }),
  );
  return [result, err];
};