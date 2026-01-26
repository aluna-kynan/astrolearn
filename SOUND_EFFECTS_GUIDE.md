# Sound Effects System - Space Quiz Mission

## Overview
Game ini sudah dilengkapi dengan **Audio Sound Effects** untuk setiap jenis weapon yang digunakan saat bermain mini-game.

## Sound Effects yang Tersedia

### 1. **Spread Shot** (Senjata Mudah)
- **Tipe Suara**: Short burst, medium pitch
- **Deskripsi**: Suara pendek yang tegas untuk serangan spread
- **Frequency**: 400 Hz
- **Durasi**: ~0.1 detik

### 2. **Blue Laser** (Senjata Medium)
- **Tipe Suara**: Frequency sweep down, higher pitch
- **Deskripsi**: Suara yang meluncur dari tinggi ke rendah seperti laser
- **Frequency**: 800 Hz → 200 Hz (sweep)
- **Durasi**: ~0.15 detik

### 3. **Magnetic Laser** (Senjata Hard)
- **Tipe Suara**: Two-tone beep sequence
- **Deskripsi**: Suara ganda yang futuristik
- **Frequency**: 600 Hz + 300 Hz (dua nada)
- **Durasi**: ~0.16 detik total

## Technical Implementation

### Audio Manager Class
Sound effects dikelola oleh class `AudioManager` di `lib/miniGame.ts` dengan fitur:

```typescript
class AudioManager {
    playSoundEffect(type: 'spread' | 'laser' | 'magnetic'): void
    setMuted(muted: boolean): void
}
```

### Bagaimana Sound Bekerja

1. **Web Audio API**: Menggunakan Web Audio API native browser (tidak perlu file MP3/WAV)
2. **Procedural Audio**: Sound di-generate secara real-time menggunakan oscillators
3. **No External Files**: Tidak perlu upload file audio terpisah
4. **Low Latency**: Suara muncul instantly saat weapon difiringkan

### Lokasi Kode

**File**: `lib/miniGame.ts`

**Lines dengan Audio**:
- Audio Manager definition: ~Lines 120-190
- Fire sound di spread weapon: ~Line 615
- Fire sound di laser weapon: ~Line 635
- Fire sound di magnetic weapon: ~Line 651

## Penggunaan

Sound effects akan **otomatis bermain** saat:
1. Player menembak dengan **Spread Shot** (Difficulty Easy)
2. Player menembak dengan **Blue Laser** (Difficulty Medium)
3. Player menembak dengan **Magnetic Laser** (Difficulty Hard)

## Customization (Opsional)

Jika ingin mengubah suara, edit bagian dalam `AudioManager.playSoundEffect()`:

### Untuk mengubah Spread Shot:
```typescript
case 'spread':
    osc.frequency.value = 400; // Ubah angka ini (lebih tinggi = pitch lebih tinggi)
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1); // Ubah 0.1 untuk durasi
```

### Untuk mengubah Blue Laser:
```typescript
case 'laser':
    osc.frequency.setValueAtTime(800, now); // Nada awal
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.15); // Nada akhir
```

### Untuk mengubah Magnetic Laser:
```typescript
case 'magnetic':
    // Ubah nilai frequency pada kedua oscillator
    osc.frequency.setValueAtTime(600, now); // Nada pertama
    osc2.frequency.value = 300; // Nada kedua
```

## Browser Compatibility

✅ Chrome/Chromium (Desktop & Mobile)
✅ Firefox
✅ Safari (iOS 6+)
✅ Edge

Jika browser tidak mendukung Web Audio API, game akan tetap jalan tanpa suara.

## Tips

- **Volume**: Sound effect sudah diset dengan gain 0.2 (volume sedang) untuk tidak mengganggu
- **Mute Option**: Bisa menambahkan mute toggle jika diperlukan dengan memanggil `audioManager.setMuted(true)`
- **Latency**: Tidak ada delay antara aksi shoot dan suara muncul

---

**Last Updated**: 2026-01-14
**Status**: ✅ Fully Functional
