## Welcome to Reper2's Nintendo Album

You may have come here from [Reper2's ACNH Website](/acnh) to download the complete album of Reper2's Animal Crossing screenshots & videos. Which can be found below in the list of download links. The ACNH Album is pretty much an entire history of my island.

I use this repository as a reference for fetching images (kinda like a database but not exactly yet) and making my projects (such as [Reper2's ACNH Website](/acnh)).

<details>
    <summary>Also if you're wondering how I keep this up-to-date without going through a process of QR Code scanning, let me explain...</summary>
    After I've finished up whatever game I'm playing (or was playing) on my Switch, I close the game and (properly) power off the Switch. Then, I open the SD Card hatch on the back of the Switch and take out the MicroSD Card. Using a special type of USB-C (that doesn't store data) which has a SD and MicroSD Card input on the side, I insert the MicroSD Card from my Switch and plug the USB-C into the Thunderbolt port of my computer. I then load the USB Drive that has the MicroSD inserted in File Explorer and navigate to [D:\Nintendo\Album](D:\Nintendo\Album) (D is the drive letter unless D is already taken), which is where my entire Nintendo album is located. Obviously acnh is not the only thing in my album, I do take captures in other games sometimes too. After I copy+paste everything from the drive over to this folder, I have to filter out all the non-acnh content (manually) as this is just an album for acnh. When I update this, I add the new photos/videos 1 day after they were taken in case I take more in that day. I only copy+paste the folder with the new photos/videos as it would be inefficient to do it any other way.
</details>

# Downloads
## Animal Crossing: New Horizons Album
[Download](https://github.com/Reper2/nintendo-album/archive/refs/heads/acnh.zip) (zip) [<span title="acnh"></span>]

## The Legend of Zelda: Breath of the Wild Album
[Download](https://github.com/Reper2/nintendo-album/archive/refs/heads/acnh.zip) (zip) [<span title="botw"></span>]

## Game Builder Garage Album
[Download](https://github.com/Reper2/nintendo-album/archive/refs/heads/gbg.zip) (zip) [<span title="gbg"></span>]

## Miitopia Album
[Download](https://github.com/Reper2/nintendo-album/archive/refs/heads/miitopia.zip) (zip) [<span title="miitopia"></span>]

## Super Mario 3D World + Bowser's Fury Album
[Download](https://github.com/Reper2/nintendo-album/archive/refs/heads/sm3dw_bf.zip) (zip) [<span title="sm3dw_bf"></span>]

## Super Mario 64 Album
[Download](https://github.com/Reper2/nintendo-album/archive/refs/heads/sm64.zip) (zip) [<span title="sm64"></span>]

## Super Mario Galaxy Album
[Download](https://github.com/Reper2/nintendo-album/archive/refs/heads/smg.zip) (zip) [<span title="smg"></span>]

## Super Mario Maker 2 Album
[Download](https://github.com/Reper2/nintendo-album/archive/refs/heads/smm2.zip) (zip) [<span title="smm2"></span>]

## Super Mario Odyssey Album
[Download](https://github.com/Reper2/nintendo-album/archive/refs/heads/smo.zip) (zip) [<span title="smo"></span>]

## Super Mario Party Album
[Download](https://github.com/Reper2/nintendo-album/archive/refs/heads/smp.zip) (zip) [<span title="smp"></span>]

<script>
    const span = document.getElementsByName("span");
    span.forEach(element => fileSize(element.title));
    function fileSize(album) {
        var params = {
            method: "GET",
            headers: {
                Range: "bytes=0-0",
            },
        };
        var response = UrlFetchApp.fetch(("https://github.com/Reper2/nintendo-album/archive/refs/heads/"+album+".zip"), params);
        var headers = response.getHeaders();
        var fileSizeString = headers['Content-Range'];
        var fileSize = fileSizeString.split("/")[1];
        span.forEach(element => element.innerHTML = fileSize);
    }
</script>
