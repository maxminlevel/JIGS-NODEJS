/* task 1 */
const emotions = [
  {
    title: 'happy',
    imagePath: '/task1/happy.jpeg',
    quotePath: '/task1/happy/happy1.jpg',
  },
  {
    title: 'sad',
    imagePath: '/task1/sad.jpeg',
    quotePath: '/task1/sad/sad1.jpg',
  },
  {
    title: 'stress',
    imagePath: '/task1/stress.jpeg',
    quotePath: '/task1/stress/stress1.jpg',
  },
  {
    title: 'angry',
    imagePath: '/task1/angry.jpeg',
    quotePath: '/task1/angry/angry1.jpg',
  },
]
/* task 3 */
const categories = [
  {
    title: 'Samsung',
    id: 1,
  },
  {
    title: 'Sony',
    id: 2,
  },
  {
    title: 'Panasonic',
    id: 3,
  },
]
const products = [
  {
    title: 'TIVI QLED SAMSUNG QA55Q7FAMKXXV',
    description:
      'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    price: 57900000,
    category: 1,
    imagePath: '/task3/smart-tv-4k-qled-q7f-01.jpg',
  },
  {
    title: 'INTERNET TIVI SONY 40 INCH KDL-40W650D',
    description:
      'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    price: 9900000,
    category: 2,
    imagePath: '/task3/tivi-lcd-sony-kdl-40w650d-01.jpg',
  },
  {
    title: 'TIVI LED PANASONIC 55 INCH TH-55DS630V',
    description:
      'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    price: 16990000,
    category: 3,
    imagePath: '/task3/tivi-panasonic-th-55ds630v.jpg',
  },
  {
    title: 'TIVI LED PANASONIC 40 INCH TH-40DS500V',
    description:
      'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    price: 7990000,
    category: 3,
    imagePath: '/task3/tivi-led-panasonic-th-40ds500v.jpg',
  },
  {
    title: 'ANDROID TIVI SONY 43 INCH KDL-43W800C',
    description:
      'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    price: 13400000,
    category: 2,
    imagePath: '/task3/tivi-lcd-sony-kdl-43w800c-vn3.jpg',
  },
  {
    title: 'TIVI LED PANASONIC 58 INCH TH-58DX700V',
    description:
      'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    price: 28490000,
    category: 3,
    imagePath: '/task3/tivi-led-panasonic-th-58dx700v.jpg',
  },
]

/* task 4 */
const zodiacs = [
  {
    name: 'Aquarius',
    imagePath: '/task4/aquarius.jpg',
    dates: 'January 20 - February 18',
    strengths: 'Progressive, original, independent, humanitarian',
    weaknesses:
      'Runs from emotional expression, temperamental, uncompromising, aloof',
    likes:
      'Fun with friends, helping others, fighting for causes, intellectual conversation, a good listener',
    dislikes:
      'Limitations, broken promises, being lonely, dull or boring situations, people who disagree with them',
    description:
      'Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems.',
  },
  {
    name: 'Pisces',
    imagePath: '/task4/pisces.jpg',
    dates: 'February 19 - March 20',
    strengths: 'Compassionate, artistic, intuitive, gentle, wise, musical',
    weaknesses:
      'Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr',
    likes:
      'Being alone, sleeping, music, romance, visual media, swimming, spiritual themes',
    dislikes:
      'Know-it-all, being criticized, the past coming back to haunt, cruelty of any kind',
    description:
      'Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back.',
  },
  {
    name: 'Aries',
    imagePath: '/task4/aries.jpg',
    dates: 'March 21 - April 19',
    likes:
      'Comfortable clothes, taking on leadership roles, physical challenges, individual sports',
    strengths:
      'Courageous, determined, confident, enthusiastic, optimistic, honest, passionate',
    weaknesses: 'Impatient, moody, short-tempered, impulsive, aggressive',
    dislikes: "Inactivity, delays, work that does not use one's talents",
    description:
      'As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent. They are continuously looking for dynamic, speed and competition, always being the first in everything - from work to social gatherings. Thanks to its ruling planet Mars and the fact it belongs to the element of Fire (just like Leo and Sagittarius), Aries is one of the most active zodiac signs. It is in their nature to take action, sometimes before they think about it well.',
  },
  {
    name: 'Taurus',
    imagePath: '/task4/taurus.jpg',
    dates: 'April 20 - May 20',
    strengths: 'Reliable, patient, practical, devoted, responsible, stable',
    weaknesses: 'Stubborn, possessive, uncompromising',
    likes:
      'Gardening, cooking, music, romance, high quality clothes, working with hands',
    dislikes:
      'Sudden changes, complications, insecurity of any kind, synthetic fabrics',
    description:
      'Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures. People born with their Sun in Taurus are sensual and tactile, considering touch and taste the most important of all senses. Stable and conservative, this is one of the most reliable signs of the zodiac, ready to endure and stick to their choices until they reach the point of personal satisfaction. ',
  },
  {
    name: 'Gemini',
    imagePath: '/task4/gemini.jpg',
    dates: 'May 21 - June 20',
    strengths:
      'Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas',
    weaknesses: 'Nervous, inconsistent, indecisive',
    likes:
      'Music, books, magazines, chats with nearly anyone, short trips around the town',
    dislikes: 'Being alone, being confined, repetition and routine',
    description:
      'Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless. They are fascinated with the world itself, extremely curious, with a constant feeling that there is not enough time to experience everything they want to see.',
  },
  {
    name: 'Cancer',
    imagePath: '/task4/cancer.jpg',
    dates: 'June 21 - July 22',
    strengths:
      'Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive',
    weaknesses: 'Moody, pessimistic, suspicious, manipulative, insecure',
    likes:
      'Art, home-based hobbies, relaxing near or in water, helping loved ones, a good meal with friends',
    dislikes: 'Strangers, any criticism of Mom, revealing of personal life',
    description:
      "Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home. Cancer is sympathetic and attached to people they keep close. Those born with their Sun in Cancer are very loyal and able to empathize with other people's pain and suffering.",
  },
  {
    name: 'Leo',
    imagePath: '/task4/leo.jpg',
    dates: 'July 23 - August 22',
    strengths:
      'Creative, passionate, generous, warm-hearted, cheerful, humorous',
    weaknesses: 'Arrogant, stubborn, self-centered, lazy, inflexible',
    likes:
      'Theater, taking holidays, being admired, expensive things, bright colors, fun with friends',
    dislikes:
      'Being ignored, facing difficult reality, not being treated like a king or queen',
    description:
      'People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to. There is a specific strength to a Leo and their "king of the jungle" status. Leo often has many friends for they are generous and loyal. Self-confident and attractive, this is a Sun sign capable of uniting different groups of people and leading them as one towards a shared cause, and their healthy sense of humor makes collaboration with other people even easier.',
  },
  {
    name: 'Virgo',
    imagePath: '/task4/virgo.jpg',
    dates: 'August 23 - September 22',
    strengths: 'Loyal, analytical, kind, hardworking, practical',
    weaknesses:
      'Shyness, worry, overly critical of self and others, all work and no play',
    likes: 'Animals, healthy food, books, nature, cleanliness',
    dislikes: 'Rudeness, asking for help, taking center stage',
    description:
      'Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance, and although they are often tender, their heart might be closed for the outer world. This is a sign often misunderstood, not because they lack the ability to express, but because they won’t accept their feelings as valid, true, or even relevant when opposed to reason. The symbolism behind the name speaks well of their nature, born with a feeling they are experiencing everything for the first time.',
  },
  {
    name: 'Libra',
    imagePath: '/task4/libra.jpg',
    dates: 'September 23 - October 22',
    strengths: 'Cooperative,diplomatic, gracious, fair-minded, social',
    weaknesses:
      'Indecisive, avoids confrontations, will carry a grudge, self-pity',
    likes: 'Harmony, gentleness, sharing with others, the outdoors',
    dislikes: 'Violence, injustice, loudmouths, conformity',
    description:
      'People born under the sign of Libra are peaceful and fair, and they hate being alone. Partnership is very important for Libra -born, and with their victorious mentality and cooperation, they cannot stand to be alone. The Libra is an Air sign, with expressed intellect and a keen mind. They can be inspired by good books, insurmountable discussions and interesting people.',
  },
  {
    name: 'Scorpio',
    imagePath: '/task4/scorpio.jpg',
    dates: 'October 23 - November 21',
    strengths: 'Resourceful, brave, passionate, stubborn, a true friend',
    weaknesses: 'Distrusting, jealous, secretive, violent',
    likes:
      'Truth, facts, being right, longtime friends, teasing, a grand passion',
    dislikes: 'Dishonesty, revealing secrets, passive people',
    description:
      'Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness. Scorpio is a Water sign and lives to experience and express emotions. Although emotions are very important for Scorpio, they manifest them differently than other water signs. In any case, you can be sure that the Scorpio will keep your secrets, whatever they may be.',
  },
  {
    name: 'Sagittarius',
    imagePath: '/task4/sagittarius.jpg',
    dates: 'November 22 - December 21',
    strengths: 'Generous, idealistic, great sense of humor',
    weaknesses:
      'Promises more than can deliver, very impatient, will say anything no matter how undiplomatic',
    likes: 'Freedom, travel, philosophy, being outdoors',
    dislikes:
      'Clingy people, being constrained, off-the-wall theories, details',
    description:
      'Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life.',
  },
  {
    name: 'Capricorn',
    imagePath: '/task4/capricorn.jpg',
    dates: 'December 22 - January 19',
    strengths: 'Responsible, disciplined, self-control, good managers',
    weaknesses: 'Know-it-all, unforgiving, condescending, expecting the worst',
    likes:
      'Family, tradition, music, understated status, quality craftsmanship',
    dislikes: 'Almost everything at some point',
    description:
      'Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives. They are masters of self-control and have the ability to lead the way, make solid and realistic plans, and manage many people who work for them at any time. They will learn from their mistakes and get to the top based solely on their experience and expertise. ',
  },
]

module.exports = {
  emotions,
  categories,
  products,
  zodiacs,
}
