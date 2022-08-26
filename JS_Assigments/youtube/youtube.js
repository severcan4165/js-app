//! ODEV2:
//! ----------------------------------------------------------
// https://www.youtube.com/watch?v=b7vfp5G4brE
// https://youtu.be/b7vfp5G4brE

const link1 = "https://www.youtube.com/watch?v=b7vfp5G4brE";

let kisalink= (link)=>{
    let indx = link1.indexOf("=");
    let kisa = link1.slice(indx+1);
        return "https://youtu.be/" + kisa;
}


console.log(kisalink(link1));
