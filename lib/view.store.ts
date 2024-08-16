import {create} from 'zustand';

const useView:any = create((set:any) => ({
  isView: false,
  setIsView: () => set(()=> ({ isView: true })),
}));

export default useView;