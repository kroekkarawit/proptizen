import { AES, enc } from "crypto-js";

export const formatLargeNumber = (number) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K";
  }
  return number.toString();
};
/*
  export function randomThingWithPopability(thingsWithQuantity) {
    //Example {"gem": 10, "mine": 3 }
    // Calculate the total quantity of all things
    const totalQuantity = Object.values(thingsWithQuantity).reduce((sum, qty) => sum + qty, 0);
  
    // Generate a random number between 0 and the total quantity (exclusive)
    const randomIndex = Math.floor(Math.random() * totalQuantity);
  
    // Find the selected thing based on the random number and quantity
    let selectedThing = null;
    let accumulatedQuantity = 0;
  
    for (const [thing, qty] of Object.entries(thingsWithQuantity)) {
      accumulatedQuantity += qty;
  
      if (randomIndex < accumulatedQuantity) {
        selectedThing = thing;
        break;
      }
    }
  
    return selectedThing;
  }

 */

export function randomThingWithPopability(thingsWithProbabilities) {
  // Calculate the total probability (should be 100%)
  const totalProbability = thingsWithProbabilities.reduce(
    (sum, thing) => sum + thing.probability,
    0
  );

  //if (totalProbability !== 100) {
  if (Math.round(totalProbability) !== 100) {
    throw new Error("Total probability is not 100%. ");
  }

  // Generate a random number between 0 and 1
  const randomValue = Math.random();

  // Initialize the cumulative probability
  let cumulativeProbability = 0;

  // Iterate through the things and find the one that matches the random value
  for (const thing of thingsWithProbabilities) {
    cumulativeProbability += thing.probability / 100; // Convert percentage to fraction

    if (randomValue <= cumulativeProbability) {
      return thing.name;
    }
  }

  // Default to the last thing if something goes wrong
  console.log(thingsWithProbabilities[thingsWithProbabilities.length - 1].name);
  return thingsWithProbabilities[thingsWithProbabilities.length - 1].name;
}

export function getRandomIndexMatchingTarget(segments, target) {
  // Create an array to store the indices that match the target criteria
  const matchingIndices = [];

  // Loop through the segments array and check if each object matches the target
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    let isMatch = true;

    // Check if each property in the target object matches the segment
    for (const key in target) {
      if (target.hasOwnProperty(key) && segment[key] !== target[key]) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) {
      matchingIndices.push(i);
    }
  }

  // Generate a random index from the matching indices
  if (matchingIndices.length > 0) {
    const randomIndex = Math.floor(Math.random() * matchingIndices.length);
    return matchingIndices[randomIndex];
  } else {
    return null; // No matching segments found
  }
}

export function setIdentify(
  string,
  secret = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
  ).getDay().toString()
) {
  return AES.encrypt(string, secret).toString();
}

export function getIdentify(
  string,
  secret = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
  ).getDay().toString()
) {
  return AES.decrypt(string, secret).toString(enc.Utf8);
}


function multiplyColorSet(rows) {
  const listColor = [];
  const center = Math.floor(rows / 2);
  const stepCount = center + (rows % 2 === 0 ? 0 : 1);
  const gStep = 192 / center;
  const bStep = 63 / center;

  for (let i = 0; i < stepCount; i++) {
    const g = i * gStep;
    const b = 63 - i * bStep;
    listColor.push([255, g, b]);
  }

  // Duplicate the first half of the list in reverse order to create the full gradient
  listColor.push(...listColor.slice(0, center).reverse());

  return listColor;
}

export function multiplyColorSetIndex(rows, index) {
  const list = multiplyColorSet(rows);
  const colorArray = list[index];
  const colorString = `rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`;
  return colorString;
}


export function gameTypeToName(type) {
  const gameList = [
    { name: "บอล Plinko", id: "plinko", description: "เกมส์ Plinko" },
    { name: "วงล้อ Wheel", id: "wheel", description: "เกมส์ วงล้อ" },
    { name: "กับระเบิด Mines", id: "mines", description: "เกมส์ กับระเบิด" },
    { name: "ไฮโล Hilo", id: "hilo", description: "เกมส์ ไฮโล" },
    {
      name: "หัวก้อย",
      id: "head-tail",
      description: "เกมส์ หัวก้อย",
    },
    {
      name: "เป่ายิงฉุบ",
      id: "rock-paper-scissor",
      description: "เกมส์ เป่ายิงฉุบ",
    }
  ];

  const game = gameList.find(game => game.id === type);
  return game ? game.name : '';
}

export const bankJson = {
  th: {
    bbl: {
      code: "002",
      color: "#1e4598",
      official_name: "BANGKOK BANK PUBLIC COMPANY LTD.",
      thai_name: "ธนาคารกรุงเทพ",
      nice_name: "Bangkok Bank",
    },
    kbank: {
      code: "004",
      color: "#138f2d",
      official_name: "KASIKORNBANK PUBLIC COMPANY LTD.",
      thai_name: "ธนาคารกสิกรไทย",
      nice_name: "Kasikornbank",
    },
    rbs: {
      code: "005",
      color: "#032952",
      official_name: "THE ROYAL BANK OF SCOTLAND PLC",
      thai_name: "ธนาคาร เดอะรอยัลแบงค์อ๊อฟสกอตแลนด์",
      nice_name: "Royal Bank of Scotland",
    },
    ktb: {
      code: "006",
      color: "#1ba5e1",
      official_name: "KRUNG THAI BANK PUBLIC COMPANY LTD.",
      thai_name: "ธนาคารกรุงไทย",
      nice_name: "Krungthai Bank",
    },
    jpm: {
      code: "008",
      color: "#321c10",
      official_name: "JPMORGAN CHASE BANK, NATIONAL ASSOCIATION",
      thai_name: "เจพีมอร์แกนเชส",
      nice_name: "J.P. Morgan",
    },
    mufg: {
      code: "010",
      color: "#d61323",
      official_name: "THE BANK OF TOKYO-MITSUBISHI UFJ, LTD.",
      thai_name: "ธนาคารแห่งโตเกียว-มิตซูบิชิ ยูเอฟเจ",
      nice_name: "Bank of Tokyo-Mitsubishi UFJ",
    },
    tmb: {
      code: "011",
      color: "#1279be",
      official_name: "TMB BANK PUBLIC COMPANY LIMITED.",
      thai_name: "ธนาคารทหารไทย",
      nice_name: "TMB Bank",
    },
    scb: {
      code: "014",
      color: "#4e2e7f",
      official_name: "SIAM COMMERCIAL BANK PUBLIC COMPANY LTD.",
      thai_name: "ธนาคารไทยพาณิชย์",
      nice_name: "Siam Commercial Bank",
    },
    citi: {
      code: "017",
      color: "#1583c7",
      official_name: "CITIBANK, N.A.",
      thai_name: "ธนาคารซิตี้แบงค์",
      nice_name: "Citibank",
    },
    smbc: {
      code: "018",
      color: "#a0d235",
      official_name: "SUMITOMO MITSUI BANKING CORPORATION",
      thai_name: "ธนาคารซูมิโตโม มิตซุย แบงค์กิ้ง คอร์ปอเรชั่น",
      nice_name: "Sumitomo Mitsui Banking Corporation",
    },
    sc: {
      code: "020",
      color: "#0f6ea1",
      official_name: "STANDARD CHARTERED BANK (THAI) PUBLIC COMPANY LIMITED",
      thai_name: "สแตนดาร์ดชาร์เตอร์ด ประเทศไทย",
      nice_name: "Standard Chartered (Thai)",
    },
    cimb: {
      code: "022",
      color: "#7e2f36",
      official_name: "CIMB THAI BANK PUPBLIC COMPANY LTD.",
      thai_name: "ธนาคารซีไอเอ็มบีไทย",
      nice_name: "CIMB Thai Bank",
    },
    uob: {
      code: "024",
      color: "#0b3979",
      official_name: "UNITED OVERSEAS BANK (THAI) PUBLIC COMPANY LIMITED",
      thai_name: "ธนาคารยูโอบี",
      nice_name: "United Overseas Bank (Thai)",
    },
    bay: {
      code: "025",
      color: "#fec43b",
      official_name: "BANK OF AYUDHYA PUBLIC COMPANY LTD.",
      thai_name: "ธนาคารกรุงศรีอยุธยา",
      nice_name: "Bank of Ayudhya (Krungsri)",
    },
    mega: {
      code: "026",
      color: "#815e3b",
      official_name:
        "MEGA INTERNATIONAL COMMERCIAL BANK PUBLIC COMPANY LIMITED",
      thai_name: "ธนาคาร เมกะ สากลพาณิชย์",
      nice_name: "Mega International Commercial Bank",
    },
    boa: {
      code: "027",
      color: "#e11e3c",
      official_name: "BANK OF AMERICA, NATIONAL ASSOCIATION",
      thai_name: "แบงก์ออฟอเมริกาคอร์ปอเรชั่น",
      nice_name: "Bank of America",
    },
    cacib: {
      code: "028",
      color: "#0e765b",
      official_name: "CREDIT AGRICOLE CORPORATE AND INVESTMENT BANK",
      thai_name: "ธนาคารเครดิต อะกริโคล",
      nice_name: "Crédit Agricole",
    },
    gsb: {
      code: "030",
      color: "#eb198d",
      official_name: "THE GOVERNMENT SAVINGS BANK",
      thai_name: "ธนาคารออมสิน",
      nice_name: "Government Savings Bank",
    },
    hsbc: {
      code: "031",
      color: "#fd0d1b",
      official_name: "THE HONGKONG AND SHANGHAI BANKING CORPORATION LTD.",
      thai_name: "ฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น",
      nice_name: "Hongkong and Shanghai Banking Corporation",
    },
    db: {
      code: "032",
      color: "#0522a5",
      official_name: "DEUTSCHE BANK AG.",
      thai_name: "ธนาคารดอยช์แบงก์",
      nice_name: "Deutsche Bank",
    },
    ghb: {
      code: "033",
      color: "#f57d23",
      official_name: "THE GOVERNMENT HOUSING BANK",
      thai_name: "ธนาคารอาคารสงเคราะห์",
      nice_name: "Government Housing Bank",
    },
    baac: {
      code: "034",
      color: "#4b9b1d",
      official_name: "BANK FOR AGRICULTURE AND AGRICULTURAL COOPERATIVES",
      thai_name: "ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร",
      nice_name: "Bank for Agriculture and Agricultural Cooperatives",
    },
    mb: {
      code: "039",
      color: "#150b78",
      official_name: "MIZUHO BANK, LTD.",
      thai_name: "ธนาคารมิซูโฮ",
      nice_name: "Mizuho Bank",
    },
    bnp: {
      code: "045",
      color: "#14925e",
      official_name: "BNP PARIBAS",
      thai_name: "บีเอ็นพี พารีบาส์",
      nice_name: "BNP Paribas",
    },
    tbank: {
      code: "065",
      color: "#fc4f1f",
      official_name: "THANACHART BANK PUBLIC COMPANY LTD.",
      thai_name: "ธนาคารธนชาต",
      nice_name: "Thanachart Bank",
    },
    ibank: {
      code: "066",
      color: "#184615",
      official_name: "ISLAMIC BANK OF THAILAND",
      thai_name: "ธนาคารอิสลามแห่งประเทศไทย",
      nice_name: "Islamic Bank of Thailand",
    },
    tisco: {
      code: "067",
      color: "#12549f",
      official_name: "TISCO BANK PUBLIC COMPANY LIMITED",
      thai_name: "ธนาคารทิสโก้",
      nice_name: "Tisco Bank",
    },
    kk: {
      code: "069",
      color: "#199cc5",
      official_name: "KIATNAKIN BANK PUBLIC COMPANY LIMITED",
      thai_name: "ธนาคารเกียรตินาคินภัทร",
      nice_name: "Kiatnakin Bank",
    },
    icbc: {
      code: "070",
      color: "#c50f1c",
      official_name:
        "INDUSTRIAL AND COMMERCIAL BANK OF CHINA (THAI) PUBLIC COMPANY LIMITED",
      thai_name: "ธนาคารสินเอเซีย จำกัด (มหาชน)",
      nice_name: "Industrial and Commercial Bank of China (Thai)",
    },
    tcrb: {
      code: "071",
      color: "#0a4ab3",
      official_name: "THE THAI CREDIT RETAIL BANK PUBLIC COMPANY LIMITED",
      thai_name: "ธนาคารไทยเครดิต เพื่อรายย่อย",
      nice_name: "Thai Credit Retail Bank",
    },
    lhb: {
      code: "073",
      color: "#6d6e71",
      official_name: "LAND AND HOUSES BANK PUBLIC COMPANY LIMITED",
      thai_name: "ธนาคารแลนด์ แอนด์ เฮ้าส์",
      nice_name: "Land and Houses Bank",
    },
    ttb: {
      code: "076",
      color: "#ecf0f1",
      official_name: "TMBTHANACHART BANK PUBLIC COMPANY LIMITED",
      thai_name: "ธนาคารทหารไทยธนชาต",
      nice_name: "TMBThanachart Bankk",
    },
    promptpay: {
      code: "075",
      color: "#00427a",
      official_name: "PROMPTPAY",
      thai_name: "พร้อมเพย์",
      nice_name: "PromptPay",
    },
  },
};

export const cropImageToFormData = (targetWidth, targetHeight, file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        let width = img.width;
        let height = img.height;
        let x = 0;
        let y = 0;

        if (width > height) {
          width = height * (targetWidth / targetHeight);
          x = (img.width - width) / 2;
        } else {
          height = width * (targetHeight / targetWidth);
          y = (img.height - height) / 2;
        }

        canvas.width = targetWidth;
        canvas.height = targetHeight;

        context.drawImage(
          img,
          x,
          y,
          width,
          height,
          0,
          0,
          targetWidth,
          targetHeight
        );

        canvas.toBlob(function (blob) {
          const croppedFile = new File([blob], file.name, {
            type: "image/jpeg",
          });
          const formData = new FormData();
          formData.append("file", croppedFile);
          resolve(formData);
        }, "image/jpeg");
      };

      img.src = event.target.result;
    };

    reader.readAsDataURL(file);
  });
};