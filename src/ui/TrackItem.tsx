import {type TrackListItemResource} from "../dal/api.ts";
import clsx from "clsx";
import styles from "./TracksList.module.css"

type Props = {
    isSelected: boolean,
    onSelect: (trackId: string) => void,
    track: TrackListItemResource
}

export function TrackItem({onSelect, isSelected, track}: Props) {
    const handleClick = () => onSelect?.(track.id)

    /*const className = styles.track + ' ' + (isSelected ? styles.selected : '');*/

    const className = clsx({
        [styles.track]: true,
        [styles.selected]: isSelected
    })

    return <li
        className={className}
        key={track.id}
        >
        <div onClick={handleClick}>
            {track.attributes.title}
        </div>
        <audio src={track.attributes.attachments[0].url}
               controls></audio>
    </li>
}