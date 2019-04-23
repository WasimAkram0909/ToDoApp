import axios from "axios";

export default axios.create({
baseURL:"http://115.248.119.138:8089/todo/",
headers:{
"Authorization":"ya29.Glz0Bq9GHfjQsaP8qk7leyVtCEEXXmDT3ou5AExPnjCRQOl27m6Jyevqi9wvc-Y26QzlyVLWgVX-yI7K6LLYn-RjrXJyqFAYMdu38WTxKnxkF55IBc2fcID9dfzONA"
}
})