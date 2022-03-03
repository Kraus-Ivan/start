radio.set_group(62)
RunComp.set_light_level()

def on_light_drop():
    music.play_tone(Note.C, music.beat())
    radio.send_number(1)
RunComp.on_light_drop(on_light_drop)
