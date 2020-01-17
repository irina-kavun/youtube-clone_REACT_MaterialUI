import React, {useState, useEffect} from 'react';
import { Grid } from '@material-ui/core';

import youtube from './api/youtube';
import { key } from './youtube-key';
import {SearchBar, VideoDetail, VideoList} from "./components";


function App() {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const onVideoSelect = video => {
        setSelectedVideo(video)
    };

    const handleSubmit = async searchTerm => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: key,
                q: searchTerm,
            },
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };

    useEffect(() => {
        handleSubmit();
    }, []);

  return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
            <Grid container spacing={10}>
                <Grid item xs={12}>
                    <SearchBar onFormSubmit={handleSubmit} />
                </Grid>
                <Grid item xs={8}>
                    <VideoDetail video={selectedVideo} />
                </Grid>
                <Grid item xs={4}>
                    <VideoList videos={videos} onVideoSelect={onVideoSelect} />
                </Grid>
            </Grid>
        </Grid>
      </Grid>
  );
}
export default App;


