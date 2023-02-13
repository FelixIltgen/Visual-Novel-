
namespace myNovel {
    export async function startChapterThree(): ƒS.SceneReturn {
        console.log("Desicion Chapter three");
        
        if (ƒS.Inventory.getAmount(items.tagebuch) == 1) {
            console.log("TEST")
            await ƒS.Location.show(locations.street);
            await ƒS.update(transition.fade.duration, transition.leftFade.alpha, transition.leftFade.edge);
            return "ChapterThreeGood";
        } else {
            return "ChapterThreeMid";
        }
        
      }
}