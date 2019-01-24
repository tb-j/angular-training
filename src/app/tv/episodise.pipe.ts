import { Pipe, PipeTransform } from '@angular/core';
import { Episode } from './tv.models';

@Pipe({
  name: 'episodise'
})
export class EpisodisePipe implements PipeTransform {

  transform(episode?: Episode): string {
    if (!episode) {
      return '';
    }
    const pad = (value: number) => value > 9 ? value : `0${value}`;

    const [seasonPadded, numberPadded] = [episode.season, episode.number].map(pad);

    return `s${seasonPadded}e${numberPadded}`;
  }

}
