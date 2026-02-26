# 🔊 Where to Get Sound Files

## Quick Sound Resources

### Free Sound Effect Sites

1. **Freesound.org** (Best option)
   - https://freesound.org/
   - Search for: "scream", "nooo", "fail", "oh no"
   - Free with attribution
   - Direct MP3 downloads

2. **Zapsplat.com**
   - https://www.zapsplat.com/
   - Search for: "scream", "vocal fail"
   - Free with account
   - High quality

3. **Pixabay Sounds**
   - https://pixabay.com/sound-effects/
   - Royalty-free
   - No attribution required

### Popular Sound Ideas

Search terms to try:
- "wilhelm scream" - The classic movie scream
- "nooo" - Dramatic rejection
- "oh no" - Casual failure
- "fail" - Game over sounds
- "error" - Computer error beeps
- "scream" - Various screaming sounds
- "fart" - Comedic option 😄

### YouTube + Converter (If Allowed)

1. Find a "FAAAAH" compilation on YouTube
2. Use yt-dlp or youtube-dl to extract audio:
   ```bash
   yt-dlp -x --audio-format mp3 [URL]
   ```
3. Rename to `faah.mp3`

### Record Your Own

**Windows (Voice Recorder):**
1. Win + S → "Voice Recorder"
2. Record yourself screaming
3. Save and convert to MP3 (VLC can convert)

**macOS (QuickTime):**
1. QuickTime Player → File → New Audio Recording
2. Record
3. Export as MP3

**Online Recorder:**
- https://online-voice-recorder.com/
- Record → Download as MP3

### Example Searches on Freesound

These should work great:
- https://freesound.org/search/?q=scream
- https://freesound.org/search/?q=no+god+no
- https://freesound.org/search/?q=fail+sound
- https://freesound.org/search/?q=error

## 🎯 Quick Steps

1. Go to **Freesound.org**
2. Search **"scream"**
3. Preview sounds, pick one
4. Download as MP3
5. Rename to `faah.mp3`
6. Move to `media/` folder
7. Done! 🎉

## ⚠️ Remember

The file MUST be named exactly: **`faah.mp3`**

Place it in: `media/faah.mp3`

## 🧪 Test Sound

Want to test if your sound file works?

**Windows PowerShell:**
```powershell
(New-Object Media.SoundPlayer 'media\faah.mp3').PlaySync()
```

**macOS Terminal:**
```bash
afplay media/faah.mp3
```

**Linux Terminal:**
```bash
mpg123 media/faah.mp3
```

If it plays, you're good to go! 🔊
