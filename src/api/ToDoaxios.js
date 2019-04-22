import axios from "axios";

export default axios.create({
baseURL:"http://115.248.119.138:8089/todo/",
headers:{
"Authorization":"ya29.GlzzBjPrMd6aUEXEhMjBWp2CNfzzwkOQ8YYW8VfLsnXFV1a8gsdlJyI0qmVRaUW9cvzueh3H0F14u1eElaCkLmbxoOCHuRNjdXdvytaiZWXX-FICz_PAIyMD4j8y4Q"
}
})