import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialIcons';


const ControlCenter = () => {
    const playBackState = usePlaybackState();
    // Next Button
    const skipToNext = async () => {
        await TrackPlayer.skipToNext()
    }

    // Previous Button
    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious()
    }

    // Play & Pause
    const togglePlayback = async (playback: State) => {
        const currentTrack = await TrackPlayer.getCurrentTrack();
        if (currentTrack !== null) {
            if (playback === State.Paused || playback === State.Ready) {
                await TrackPlayer.play()
            } else {
                await TrackPlayer.pause()
            }
        }
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={skipToPrevious}>
                <Icon style={styles.icon} name={'skip-previous'} size={40} />
            </Pressable>
            <Pressable onPress={() => togglePlayback(playBackState.state)}>
                <Icon style={styles.icon} name={State.Playing === playBackState?.state ? "pause" : "play-arrow"} size={75} />
            </Pressable>
            <Pressable onPress={skipToNext}>
                <Icon style={styles.icon} name={'skip-next'} size={40} />
            </Pressable>

        </View>
    )
}

export default ControlCenter

const styles = StyleSheet.create({
    container: {
        marginBottom: 56,

        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        color: '#FFFFFF',
    },
    playButton: {
        marginHorizontal: 24,
    },
})