export const exerciseOptions = {
    method: 'GET',
    params: {limit: '10'},
    headers: {
        /* 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, */
        'X-RapidAPI-Key': 'c8a42e4734mshd8a3fa3018a4094p1ff31cjsndf003e485402',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
};

export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}