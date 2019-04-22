import axios from "axios";

export default axios.create({
baseURL:"http://115.248.119.138:8089/todo/",
headers:{
"Authorization":"ya29.GlzzBm6xaZUjozcnrKwACwpAC1loTCtIYqWERhZ5lIsfhcYbSmX43sJljx2vNblWs7qsc2JEVQXZtqtkJOogUNtutcjt083_9NUT0RG0Q7WWzvYbHdkrnJ1J6MEJyg"
}
})