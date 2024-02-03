// import { CUBE_CACHE, CURRENT_USER } from "@constants";
// import { LoadingKey, LoadingProps } from "@custom-types/loading";
// import { User } from "@custom-types/user";
import { LoadingKey, LoadingProps } from "@custom-types/loading";
import axios, { AxiosResponse, CancelToken } from "axios";
// import md5 from "md5";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/root-reducer";
// import { setLoading } from "redux/root-reducer";

// const getLocalData = () => {
//   try {
//     return JSON.parse(localStorage.getItem(CUBE_CACHE));
//   } catch (e) {
//     return null;
//   }
// };

function useActionApi<P = any, T = any>(
  api: (body?: P, cancelToken?: CancelToken) => Promise<AxiosResponse<T>>
): ({ body, isCache, loading }: { body?: P; isCache?: boolean; loading: LoadingProps }) => Promise<AxiosResponse<T>> {
  const [cancelToken, setCancelToken] = useState(axios.CancelToken.source());
  const dispatch = useDispatch();

  useEffect(() => {
    return () => cancelToken.cancel();
  }, [cancelToken]);

  const action = useCallback(
    ({
      body,
      isCache,
      loading,
    }: {
      body?: P;
      isCache?: boolean;
      loading?: LoadingProps;
    }): Promise<AxiosResponse<T>> => {
      //   const user: User = JSON.parse(sessionStorage.getItem(CURRENT_USER));
      //   const cacheKey = md5(user?.username + loading.name + JSON.stringify(body));
      //   const dataCache = getLocalData();
      //   const now = new Date().getTime();

      //   if (isCache && dataCache?.[cacheKey] && now < dataCache[cacheKey].expired) {
      //     return Promise.resolve(dataCache[cacheKey]);
      //   }

      //   if (isCache && dataCache?.[cacheKey] && now > dataCache[cacheKey].expired) {
      //     localStorage.removeItem(CUBE_CACHE);
      //   }

      //   let cancelToken = axios.CancelToken.source();
      //   setCancelToken(cancelToken);

      return new Promise((res, rej) => {
        //set loading
        dispatch(setLoading({ [loading.name]: loading.type } as LoadingKey));

        //run api
        api(body, cancelToken.token)
          .then((e) => {
            // if (isCache) {
            //   if (e.status === 200) {
            //     const preData = getLocalData();
            //     localStorage.setItem(
            //       CUBE_CACHE,
            //       JSON.stringify({
            //         ...preData,
            //         [cacheKey]: {
            //           data: e.data,
            //           expired: new Date().getTime() + 30 * 60 * 1000, // Tri's request: cache data 30mins
            //         },
            //       })
            //     );
            //   }
            // }
            res(e);
          })
          .catch((e) => {
            rej(e);
          })
          .finally(() => {
            dispatch(setLoading({ [loading.name]: "" } as LoadingKey));
          });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [api]
  );

  return action;
}

export default useActionApi;
