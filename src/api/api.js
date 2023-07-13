export const VITE_API_END_POINT = import.meta.env.VITE_API_END_POINT;

export const request = async (url) => {
  try {
    const res = await fetch(`${VITE_API_END_POINT}${url}`);

    if (!res.ok) {
      throw new Error('API 호출이 이상합니다');
    }
    return await res.json();
  } catch (e) {
    alert(e.message);
  }
};
