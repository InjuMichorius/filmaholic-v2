import { movieOverview } from './movieOverview.js';
import { movieDetails } from './movieDetails.js';

//Routes to pages
export function router() {
    routie({':id': movieDetails});
    routie({'home': movieOverview('none')});
};

