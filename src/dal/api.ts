export type TrackDetailsResource = {
    id: string,
    attributes: {
        title: string,
        lyrics: string | null,
    }
}

type GetTrackDetailsOutput = {
    data: TrackDetailsResource,
}

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailsOutput> = fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + trackId, {
            headers: {
                //"api-key": "982a1eb9-d8b5-43c0-a3b0-e5a9812ea19b"
            },
        }).then((res) => res.json())

    return promise;
}

type AttachmentDto = {
    url: string
}

type TrackListItemResourceAttributes = {
    title: string,
    attachments: Array<AttachmentDto>
}

export type TrackListItemResource = {
    id: string,
    attributes: TrackListItemResourceAttributes,
}

type GetTrackListOutput = {
    data: Array<TrackListItemResource>
}

export const getTracks = () => {
    const promise: Promise<GetTrackListOutput> = fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
            headers: {
                //"api-key": "982a1eb9-d8b5-43c0-a3b0-e5a9812ea19b",
            },
        })
            .then((res) => res.json())
    return promise;
}