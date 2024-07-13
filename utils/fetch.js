const getFetch = async (url) => {
  const res = await fetch(`http://shahriarh.ir/api${url}`, {
    cache: "no-store",
    headers: {
      "Content-Type" : "application/json",
      "Accept" : "application/json",
    },
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    throw new Error(`مشکل در دریافت اطلاعات ${res.status}`);
  }
};

const postFetch = async (url , body) => {
  const res = await fetch(`http://shahriarh.ir/api${url}`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
      "Accept" : "application/json",
    },
    body: JSON.stringify(body)
  });
console.log(body);
  if (res.ok) {
   return await res.json();
  }
};

const postFormFetch = async (url , body) => {
  const res = await fetch(`http://shahriarh.ir/api${url}`, {
    cache: "no-store",
    method: "POST",
    headers: {
      'Accept': 'application/json',
    },
    body
  });

  if (res.ok) {
   return await res.json();
  }
  return console.error(await res.text())
};
export { getFetch , postFetch , postFormFetch };
