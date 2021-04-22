// export default async function fetchData(url, data) {
//     console.log(JSON.stringify(data))
//     fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ sort: data })
//     }).then(response => response.ok ? response.json() : console.log(response.ok))
// }