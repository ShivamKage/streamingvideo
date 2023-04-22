const MY_YOUTUBE_API = "AIzaSyD6Ivf-MarUHGPp7xo5ytVKBnWkG7S22VM";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  MY_YOUTUBE_API;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULT_LIST1 =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=";

export const YOUTUBE_SEARCH_RESULT_LIST2 = "&type=video&key=" + MY_YOUTUBE_API;
