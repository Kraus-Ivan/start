radio.setGroup(62)
RunComp.SetLightLevel()
RunComp.OnLightDrop(function on_light_drop() {
    music.playTone(Note.C, music.beat())
    radio.sendNumber(1)
})
