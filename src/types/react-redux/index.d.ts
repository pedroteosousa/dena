import * as react_redux from 'react-redux'

declare module 'react-redux' {
  export function useSelector<S, T>(f: (s: S) => T): T
  export function useDispatch<D>(): D
}
