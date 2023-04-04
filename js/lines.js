document.addEventListener('DOMContentLoaded', function () {
  const lines = [
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/2fast5me.mp3?raw=true', line: '2fast5me' },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/aliens its got to be aliens.mp3?raw=true',
      line: 'aliens its got to be aliens',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/all you had to do was follow the damn train cj.mp3?raw=true',
      line: 'all you had to do was follow the damn train cj',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/almost caught captain jack sparrow.mp3?raw=true',
      line: 'almost caught captain jack sparrow',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/america fuck yeah.mp3?raw=true',
      line: 'america fuck yeah',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/and dey say1.mp3?raw=true',
      line: 'and dey say1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/and dey say2.mp3?raw=true',
      line: 'and dey say2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/and dey say3.mp3?raw=true',
      line: 'and dey say3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/and dey say4.mp3?raw=true',
      line: 'and dey say4',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/and dey say5.mp3?raw=true',
      line: 'and dey say5',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/and dey say6.mp3?raw=true',
      line: 'and dey say6',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/ass we can.mp3?raw=true',
      line: 'ass we can',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/babag or fortnite.mp3?raw=true',
      line: 'babag or fortnite',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/back to the choppa.mp3?raw=true',
      line: 'back to the choppa',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/bacon is good for me1.mp3?raw=true',
      line: 'bacon is good for me1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/bacon is good for me2.mp3?raw=true',
      line: 'bacon is good for me2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/bacon is good for me3.mp3?raw=true',
      line: 'bacon is good for me3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/bacon is good for me4.mp3?raw=true',
      line: 'bacon is good for me4',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/bacon is good for me5.mp3?raw=true',
      line: 'bacon is good for me5',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/bacon is good for me6.mp3?raw=true',
      line: 'bacon is good for me6',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/bacon is good for us.mp3?raw=true',
      line: 'bacon is good for us',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/bada bing bada boom1.mp3?raw=true',
      line: 'bada bing bada boom1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/bada bing bada boom2.mp3?raw=true',
      line: 'bada bing bada boom2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/bada bing bada boom3.mp3?raw=true',
      line: 'bada bing bada boom3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/bada bing bada boom4.mp3?raw=true',
      line: 'bada bing bada boom4',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/best pirate.mp3?raw=true',
      line: 'best pirate',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/better call saul.mp3?raw=true',
      line: 'better call saul',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/big booty bitches1.mp3?raw=true',
      line: 'big booty bitches1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/big booty bitches2.mp3?raw=true',
      line: 'big booty bitches2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/bitconnect1.mp3?raw=true',
      line: 'bitconnect1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/bitconnect2.mp3?raw=true',
      line: 'bitconnect2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/captain jack sparrow.mp3?raw=true',
      line: 'captain jack sparrow',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/cash me outside.mp3?raw=true',
      line: 'cash me outside',
    },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/cbt.mp3?raw=true', line: 'cbt' },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/charlie bit me.mp3?raw=true',
      line: 'charlie bit me',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/charlie bit me2.mp3?raw=true',
      line: 'charlie bit me2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/charlie bit me3.mp3?raw=true',
      line: 'charlie bit me3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/charlie that really hurt.mp3?raw=true',
      line: 'charlie that really hurt',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/china number 1.mp3?raw=true',
      line: 'china number 1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/crash this plane with no survivors.mp3?raw=true',
      line: 'crash this plane with no survivors',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/crashing this plane with no survivors1.mp3?raw=true',
      line: 'crashing this plane with no survivors1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/crashing this plane with no survivors2.mp3?raw=true',
      line: 'crashing this plane with no survivors2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/crashing this plane with no survivors3.mp3?raw=true',
      line: 'crashing this plane with no survivors3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/cunt with his arse out1.mp3?raw=true',
      line: 'cunt with his arse out1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/cunt with his arse out2.mp3?raw=true',
      line: 'cunt with his arse out2',
    },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/damn son.mp3?raw=true', line: 'damn son' },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/danke.mp3?raw=true', line: 'danke' },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/dedotated wam.mp3?raw=true',
      line: 'dedotated wam',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/deez nuts ha got em.mp3?raw=true',
      line: 'deez nuts ha got em',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/deez nuts.mp3?raw=true',
      line: 'deez nuts',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/desperate times.mp3?raw=true',
      line: 'desperate times',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/dicks in my ass.mp3?raw=true',
      line: 'dicks in my ass',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/do the roar.mp3?raw=true',
      line: 'do the roar',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/do the roar2.mp3?raw=true',
      line: 'do the roar2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/do you know da way.mp3?raw=true',
      line: 'do you know da way',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/do you suck dicks.mp3?raw=true',
      line: 'do you suck dicks',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/double rainbow.mp3?raw=true',
      line: 'double rainbow',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/epic rap battles of history1.mp3?raw=true',
      line: 'epic rap battles of history1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/epic rap battles of history2.mp3?raw=true',
      line: 'epic rap battles of history2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/epic wutface battles of history.mp3?raw=true',
      line: 'epic wutface battles of history',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/even steven.mp3?raw=true',
      line: 'even steven',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/everybody in the nether knows kung fu.mp3?raw=true',
      line: 'everybody in the nether knows kung fu',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/everyone get in here1.mp3?raw=true',
      line: 'everyone get in here1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/everyone get in here2.mp3?raw=true',
      line: 'everyone get in here2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/everyone get in here3.mp3?raw=true',
      line: 'everyone get in here3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/fisting is 300 bucks.mp3?raw=true',
      line: 'fisting is 300 bucks',
    },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/for now.mp3?raw=true', line: 'for now' },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/for you.mp3?raw=true', line: 'for you' },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/forsen forsen im your number 1 fan1.mp3?raw=true',
      line: 'forsen forsen im your number 1 fan1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/forsen forsen im your number 1 fan2.mp3?raw=true',
      line: 'forsen forsen im your number 1 fan2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/forsen forsen im your number 1 fan3.mp3?raw=true',
      line: 'forsen forsen im your number 1 fan3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/forsen forsen im your number 1 fan4.mp3?raw=true',
      line: 'forsen forsen im your number 1 fan4',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/fuck it well do it live.mp3?raw=true',
      line: 'fuck it well do it live',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/fuck my ass and call me charlie.mp3?raw=true',
      line: 'fuck my ass and call me charlie',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/fuck my ass.mp3?raw=true',
      line: 'fuck my ass',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/fuck you dolphin.mp3?raw=true',
      line: 'fuck you dolphin',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/fus ro dah.mp3?raw=true',
      line: 'fus ro dah',
    },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/gandalf.mp3?raw=true', line: 'gandalf' },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/garrosh vs malforen.mp3?raw=true',
      line: 'garrosh vs malforen',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/god of war.mp3?raw=true',
      line: 'god of war',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/golden legendary.mp3?raw=true',
      line: 'golden legendary',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/good news everyone.mp3?raw=true',
      line: 'good news everyone',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/grab a seat by the hearth.mp3?raw=true',
      line: 'grab a seat by the hearth',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/grape fruit technique.mp3?raw=true',
      line: 'grape fruit technique',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/ground beef1.mp3?raw=true',
      line: 'ground beef1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/ground beef2.mp3?raw=true',
      line: 'ground beef2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/hate us cuz they anus.mp3?raw=true',
      line: 'hate us cuz they anus',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/hello mathafaka.mp3?raw=true',
      line: 'hello mathafaka',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/hey arnold.mp3?raw=true',
      line: 'hey arnold',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/hey hey hey.mp3?raw=true',
      line: 'hey hey hey',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/hey marine1.mp3?raw=true',
      line: 'hey marine1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/hey marine2.mp3?raw=true',
      line: 'hey marine2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/hide your kids hide your wife.mp3?raw=true',
      line: 'hide your kids hide your wife',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/high noon1.mp3?raw=true',
      line: 'high noon1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/high noon2.mp3?raw=true',
      line: 'high noon2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/high noon3.mp3?raw=true',
      line: 'high noon3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/high noon4.mp3?raw=true',
      line: 'high noon4',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/high noon5.mp3?raw=true',
      line: 'high noon5',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/high noon6.mp3?raw=true',
      line: 'high noon6',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/hold your horses1.mp3?raw=true',
      line: 'hold your horses1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/hold your horses2.mp3?raw=true',
      line: 'hold your horses2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/homeless1.mp3?raw=true',
      line: 'homeless1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/homeless2.mp3?raw=true',
      line: 'homeless2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/houston we have a problem.mp3?raw=true',
      line: 'houston we have a problem',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/how can she slap me.mp3?raw=true',
      line: 'how can she slap me',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/how can she slap1.mp3?raw=true',
      line: 'how can she slap1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/how can she slap2.mp3?raw=true',
      line: 'how can she slap2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/how they butchered my boy.mp3?raw=true',
      line: 'how they butchered my boy',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/hugh mungus wot.mp3?raw=true',
      line: 'hugh mungus wot',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/i cant believe youve done this1.mp3?raw=true',
      line: 'i cant believe youve done this1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/i cant believe youve done this2.mp3?raw=true',
      line: 'i cant believe youve done this2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/i cant believe youve done this3.mp3?raw=true',
      line: 'i cant believe youve done this3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/i cant go to yemen1.mp3?raw=true',
      line: 'i cant go to yemen1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/i cant go to yemen2.mp3?raw=true',
      line: 'i cant go to yemen2',
    },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/i cant.mp3?raw=true', line: 'i cant' },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/i didnt hear no bell.mp3?raw=true',
      line: 'i didnt hear no bell',
    },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/i forgor.mp3?raw=true', line: 'i forgor' },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/i like turtles.mp3?raw=true',
      line: 'i like turtles',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/i prefer men.mp3?raw=true',
      line: 'i prefer men',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/i still love you1.mp3?raw=true',
      line: 'i still love you1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/i still love you2.mp3?raw=true',
      line: 'i still love you2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/i still love you3.mp3?raw=true',
      line: 'i still love you3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/i turned my self into a cucumber.mp3?raw=true',
      line: 'i turned my self into a cucumber',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/i turned myself into a pickle.mp3?raw=true',
      line: 'i turned myself into a pickle',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/i used to be an adventurer but then i took an arrow to the knee.mp3?raw=true',
      line: 'i used to be an adventurer but then i took an arrow to the knee',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/ichiban lipstick for men.mp3?raw=true',
      line: 'ichiban lipstick for men',
    },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/idk kev1.mp3?raw=true', line: 'idk kev1' },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/idk kev2.mp3?raw=true', line: 'idk kev2' },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/if you think you can graduate.mp3?raw=true',
      line: 'if you think you can graduate',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/im batman1.mp3?raw=true',
      line: 'im batman1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/im batman2.mp3?raw=true',
      line: 'im batman2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/im batman3.mp3?raw=true',
      line: 'im batman3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/im undead not dead dead.mp3?raw=true',
      line: 'im undead not dead dead',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/im walking here.mp3?raw=true',
      line: 'im walking here',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/in game how.mp3?raw=true',
      line: 'in game how',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/it aint easy.mp3?raw=true',
      line: 'it aint easy',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/it do go down.mp3?raw=true',
      line: 'it do go down',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/it do go down2.mp3?raw=true',
      line: 'it do go down2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/it do go down3.mp3?raw=true',
      line: 'it do go down3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/it do go down4.mp3?raw=true',
      line: 'it do go down4',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/it is what it is.mp3?raw=true',
      line: 'it is what it is',
    },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/its a me.mp3?raw=true', line: 'its a me' },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/its like a 3rd party thing.mp3?raw=true',
      line: 'its like a 3rd party thing',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/its morbin time.mp3?raw=true',
      line: 'its morbin time',
    },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/its ova1.mp3?raw=true', line: 'its ova1' },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/its ova2.mp3?raw=true', line: 'its ova2' },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/its ova3.mp3?raw=true', line: 'its ova3' },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/its over anakin.mp3?raw=true',
      line: 'its over anakin',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/its so fucking deep.mp3?raw=true',
      line: 'its so fucking deep',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/ive never seen a woman.mp3?raw=true',
      line: 'ive never seen a woman',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/joe biden you have 2 yil.mp3?raw=true',
      line: 'joe biden you have 2 yil',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/killing machine.mp3?raw=true',
      line: 'killing machine',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/king of the castle.mp3?raw=true',
      line: 'king of the castle',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/king of the mountain very nice.mp3?raw=true',
      line: 'king of the mountain very nice',
    },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/laser1.mp3?raw=true', line: 'laser1' },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/laser2.mp3?raw=true', line: 'laser2' },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/laser3.mp3?raw=true', line: 'laser3' },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/leave britney alone.mp3?raw=true',
      line: 'leave britney alone',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/leave me alone.mp3?raw=true',
      line: 'leave me alone',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/legend wait for it ary.mp3?raw=true',
      line: 'legend wait for it ary',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/lets get right into the news.mp3?raw=true',
      line: 'lets get right into the news',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/life is like a box of chocolate.mp3?raw=true',
      line: 'life is like a box of chocolate',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/lordy lord theres a fire i didnt grab no shoes or nothing.mp3?raw=true',
      line: 'lordy lord theres a fire i didnt grab no shoes or nothing',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/mathafaka mathafaka1.mp3?raw=true',
      line: 'mathafaka mathafaka1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/mathafaka mathafaka2.mp3?raw=true',
      line: 'mathafaka mathafaka2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/mathafaka mathafaka3.mp3?raw=true',
      line: 'mathafaka mathafaka3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/mathafaka mathafaka4.mp3?raw=true',
      line: 'mathafaka mathafaka4',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/meep meep.mp3?raw=true',
      line: 'meep meep',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/moms spaghetti.mp3?raw=true',
      line: 'moms spaghetti',
    },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/mthafaka.mp3?raw=true', line: 'mthafaka' },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/my life is not even potato.mp3?raw=true',
      line: 'my life is not even potato',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/my name is boxxy.mp3?raw=true',
      line: 'my name is boxxy',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/my name is jeff.mp3?raw=true',
      line: 'my name is jeff',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/my name is jeff2.mp3?raw=true',
      line: 'my name is jeff2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/my spider senses are tingling.mp3?raw=true',
      line: 'my spider senses are tingling',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/nintendo 64 1.mp3?raw=true',
      line: 'nintendo 64 1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/nintendo 64 2.mp3?raw=true',
      line: 'nintendo 64 2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/nintendo 64 3.mp3?raw=true',
      line: 'nintendo 64 3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/no longer potato.mp3?raw=true',
      line: 'no longer potato',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/no one cared until he put on the mask.mp3?raw=true',
      line: 'no one cared until he put on the mask',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/no spammarino.mp3?raw=true',
      line: 'no spammarino',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/not the bees.mp3?raw=true',
      line: 'not the bees',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/nothing here1.mp3?raw=true',
      line: 'nothing here1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/nothing here2.mp3?raw=true',
      line: 'nothing here2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/nothing here3.mp3?raw=true',
      line: 'nothing here3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/nothing here4.mp3?raw=true',
      line: 'nothing here4',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/oh shit im sorry sorry for what.mp3?raw=true',
      line: 'oh shit im sorry sorry for what',
    },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/order.mp3?raw=true', line: 'order' },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/over 9000.mp3?raw=true',
      line: 'over 9000',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/pains overlaod.mp3?raw=true',
      line: 'pains overlaod',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/polska gurom.mp3?raw=true',
      line: 'polska gurom',
    },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/potato1.mp3?raw=true', line: 'potato1' },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/potato2.mp3?raw=true', line: 'potato2' },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/potato3.mp3?raw=true', line: 'potato3' },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/potato4.mp3?raw=true', line: 'potato4' },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/potato5.mp3?raw=true', line: 'potato5' },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/potatooo.mp3?raw=true', line: 'potatooo' },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/pretty much everywhere its gonna be hot.mp3?raw=true',
      line: 'pretty much everywhere its gonna be hot',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/previously on lost1.mp3?raw=true',
      line: 'previously on lost1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/previously on lost10.mp3?raw=true',
      line: 'previously on lost10',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/previously on lost2.mp3?raw=true',
      line: 'previously on lost2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/previously on lost3.mp3?raw=true',
      line: 'previously on lost3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/previously on lost4.mp3?raw=true',
      line: 'previously on lost4',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/previously on lost5.mp3?raw=true',
      line: 'previously on lost5',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/previously on lost6.mp3?raw=true',
      line: 'previously on lost6',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/previously on lost7.mp3?raw=true',
      line: 'previously on lost7',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/previously on lost8.mp3?raw=true',
      line: 'previously on lost8',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/previously on lost9.mp3?raw=true',
      line: 'previously on lost9',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/previously on prison break.mp3?raw=true',
      line: 'previously on prison break',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/previously on the grudge.mp3?raw=true',
      line: 'previously on the grudge',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/previously on the walking dead.mp3?raw=true',
      line: 'previously on the walking dead',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/professor carr.mp3?raw=true',
      line: 'professor carr',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/professor carr2.mp3?raw=true',
      line: 'professor carr2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/quite impressive.mp3?raw=true',
      line: 'quite impressive',
    },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/raul.mp3?raw=true', line: 'raul' },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/remember this as the day where you almost beat captain jack sparrow.mp3?raw=true',
      line: 'remember this as the day where you almost beat captain jack sparrow',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/risk it for the biscuit1.mp3?raw=true',
      line: 'risk it for the biscuit1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/risk it for the biscuit2.mp3?raw=true',
      line: 'risk it for the biscuit2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/risk it for the biscuit3.mp3?raw=true',
      line: 'risk it for the biscuit3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/risk it for the biscuit4.mp3?raw=true',
      line: 'risk it for the biscuit4',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/risk it for the biscuit5.mp3?raw=true',
      line: 'risk it for the biscuit5',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/rotten potato.mp3?raw=true',
      line: 'rotten potato',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/round 2 fight.mp3?raw=true',
      line: 'round 2 fight',
    },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/ruined.mp3?raw=true', line: 'ruined' },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/samir youre breaking the car.mp3?raw=true',
      line: 'samir youre breaking the car',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/say hello to my little friend1.mp3?raw=true',
      line: 'say hello to my little friend1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/say hello to my little friend2.mp3?raw=true',
      line: 'say hello to my little friend2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/say hello to my little friend3.mp3?raw=true',
      line: 'say hello to my little friend3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/scanning parameter.mp3?raw=true',
      line: 'scanning parameter',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/see you later alligator.mp3?raw=true',
      line: 'see you later alligator',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/sent out here to do a story.mp3?raw=true',
      line: 'sent out here to do a story',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/shit in my asshole.mp3?raw=true',
      line: 'shit in my asshole',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/shite without flushing.mp3?raw=true',
      line: 'shite without flushing',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/shoulda woulda coulda.mp3?raw=true',
      line: 'shoulda woulda coulda',
    },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/shungite.mp3?raw=true', line: 'shungite' },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/shut up meg.mp3?raw=true',
      line: 'shut up meg',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/slice em up doc.mp3?raw=true',
      line: 'slice em up doc',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/smoke weed everyday1.mp3?raw=true',
      line: 'smoke weed everyday1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/smoke weed everyday2.mp3?raw=true',
      line: 'smoke weed everyday2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/snakes on a plane.mp3?raw=true',
      line: 'snakes on a plane',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/spamming those little baby precious emotes.mp3?raw=true',
      line: 'spamming those little baby precious emotes',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/spartans lower your weapons.mp3?raw=true',
      line: 'spartans lower your weapons',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/spartans what is your profession.mp3?raw=true',
      line: 'spartans what is your profession',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/speak vietnamese1.mp3?raw=true',
      line: 'speak vietnamese1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/speak vietnamese2.mp3?raw=true',
      line: 'speak vietnamese2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/speak vietnamese3.mp3?raw=true',
      line: 'speak vietnamese3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/starting tom cruise.mp3?raw=true',
      line: 'starting tom cruise',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/stop spamming my laptop is getting hot.mp3?raw=true',
      line: 'stop spamming my laptop is getting hot',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/stupid fucking mistakes man.mp3?raw=true',
      line: 'stupid fucking mistakes man',
    },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/tazdingo.mp3?raw=true', line: 'tazdingo' },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/thank you for coming to my ted talk.mp3?raw=true',
      line: 'thank you for coming to my ted talk',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/thanks for watching the stream.mp3?raw=true',
      line: 'thanks for watching the stream',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/that is legitness.mp3?raw=true',
      line: 'that is legitness',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/thats all she wrote.mp3?raw=true',
      line: 'thats all she wrote',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/thats just the way the cookie crumbles.mp3?raw=true',
      line: 'thats just the way the cookie crumbles',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/the fuck did you just say to me you little shit.mp3?raw=true',
      line: 'the fuck did you just say to me you little shit',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/the semen arsonist.mp3?raw=true',
      line: 'the semen arsonist',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/there we go master bruce1.mp3?raw=true',
      line: 'there we go master bruce1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/there we go master bruce2.mp3?raw=true',
      line: 'there we go master bruce2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/thingy majinggy1.mp3?raw=true',
      line: 'thingy majinggy1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/thingy majinggy2.mp3?raw=true',
      line: 'thingy majinggy2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/third party things.mp3?raw=true',
      line: 'third party things',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/this is not how the cookie crumbles.mp3?raw=true',
      line: 'this is not how the cookie crumbles',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/too soon executus.mp3?raw=true',
      line: 'too soon executus',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/turn off the notifications.mp3?raw=true',
      line: 'turn off the notifications',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/use the shovel chance.mp3?raw=true',
      line: 'use the shovel chance',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/used to be an adventurer1.mp3?raw=true',
      line: 'used to be an adventurer1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/vape nation1.mp3?raw=true',
      line: 'vape nation1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/vape nation2.mp3?raw=true',
      line: 'vape nation2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/wadu hek1.mp3?raw=true',
      line: 'wadu hek1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/wadu hek2.mp3?raw=true',
      line: 'wadu hek2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/wadu hek3.mp3?raw=true',
      line: 'wadu hek3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/wadu hek4.mp3?raw=true',
      line: 'wadu hek4',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/war never changes.mp3?raw=true',
      line: 'war never changes',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/watch your profanity.mp3?raw=true',
      line: 'watch your profanity',
    },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/wazzap.mp3?raw=true', line: 'wazzap' },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/welcome to uganda.mp3?raw=true',
      line: 'welcome to uganda',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/well see well see1.mp3?raw=true',
      line: 'well see well see1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/well see well see2.mp3?raw=true',
      line: 'well see well see2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/well see well see3.mp3?raw=true',
      line: 'well see well see3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/well see well see4.mp3?raw=true',
      line: 'well see well see4',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/well see well see5.mp3?raw=true',
      line: 'well see well see5',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/well see well see6.mp3?raw=true',
      line: 'well see well see6',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/well see well see7.mp3?raw=true',
      line: 'well see well see7',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/well see well see8.mp3?raw=true',
      line: 'well see well see8',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/well see well see9.mp3?raw=true',
      line: 'well see well see9',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/were about to find out1.mp3?raw=true',
      line: 'were about to find out1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/were about to find out2.mp3?raw=true',
      line: 'were about to find out2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/what are those.mp3?raw=true',
      line: 'what are those',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/what are you doing in me swamp.mp3?raw=true',
      line: 'what are you doing in me swamp',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/what are you trying to say that i can dodge bullets.mp3?raw=true',
      line: 'what are you trying to say that i can dodge bullets',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/what are you trying to tell me that i can dodge bullets1.mp3?raw=true',
      line: 'what are you trying to tell me that i can dodge bullets1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/what are you trying to tell me that i can dodge bullets2.mp3?raw=true',
      line: 'what are you trying to tell me that i can dodge bullets2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/what are you trying to tell me that i can dodge bullets3.mp3?raw=true',
      line: 'what are you trying to tell me that i can dodge bullets3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/what did you say about me you little bitch.mp3?raw=true',
      line: 'what did you say about me you little bitch',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/what does that mean for the future.mp3?raw=true',
      line: 'what does that mean for the future',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/whatcha talkin bout willis1.mp3?raw=true',
      line: 'whatcha talkin bout willis1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/whatcha talkin bout willis2.mp3?raw=true',
      line: 'whatcha talkin bout willis2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/whatcha talkin bout willis3.mp3?raw=true',
      line: 'whatcha talkin bout willis3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/whatcha talkin bout willis4.mp3?raw=true',
      line: 'whatcha talkin bout willis4',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/whatcha talkin bout willis5.mp3?raw=true',
      line: 'whatcha talkin bout willis5',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/whatcha talkin bout willis6.mp3?raw=true',
      line: 'whatcha talkin bout willis6',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/whatcha talkin bout willis7.mp3?raw=true',
      line: 'whatcha talkin bout willis7',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/whats the most you ever lost in a coin toss.mp3?raw=true',
      line: 'whats the most you ever lost in a coin toss',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/where are my dragons1.mp3?raw=true',
      line: 'where are my dragons1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/where are my dragons2.mp3?raw=true',
      line: 'where are my dragons2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/where are my dragons3.mp3?raw=true',
      line: 'where are my dragons3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/where are my dragons4.mp3?raw=true',
      line: 'where are my dragons4',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/where are my dragons5.mp3?raw=true',
      line: 'where are my dragons5',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/where is rachel1.mp3?raw=true',
      line: 'where is rachel1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/where is rachel2.mp3?raw=true',
      line: 'where is rachel2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/where is she where is rachel.mp3?raw=true',
      line: 'where is she where is rachel',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/where is she.mp3?raw=true',
      line: 'where is she',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/where the fuck i am.mp3?raw=true',
      line: 'where the fuck i am',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/whos that pokemon.mp3?raw=true',
      line: 'whos that pokemon',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/whos that pokemon2.mp3?raw=true',
      line: 'whos that pokemon2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/why are you gay.mp3?raw=true',
      line: 'why are you gay',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/why are you runnin.mp3?raw=true',
      line: 'why are you runnin',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/with great powers.mp3?raw=true',
      line: 'with great powers',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/wombo combo that aint falco.mp3?raw=true',
      line: 'wombo combo that aint falco',
    },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/wotah1.mp3?raw=true', line: 'wotah1' },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/wotah2.mp3?raw=true', line: 'wotah2' },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/wotah3.mp3?raw=true', line: 'wotah3' },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/wotah4.mp3?raw=true', line: 'wotah4' },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/yeah but thats like a third party thing.mp3?raw=true',
      line: 'yeah but thats like a third party thing',
    },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/yolo1.mp3?raw=true', line: 'yolo1' },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/yolo2.mp3?raw=true', line: 'yolo2' },
    { url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/yolo3.mp3?raw=true', line: 'yolo3' },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/you face jaraxxus.mp3?raw=true',
      line: 'you face jaraxxus',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/you never know1.mp3?raw=true',
      line: 'you never know1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/you never know2.mp3?raw=true',
      line: 'you never know2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/you never know3.mp3?raw=true',
      line: 'you never know3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/you only yolo once.mp3?raw=true',
      line: 'you only yolo once',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/you shall not pass1.mp3?raw=true',
      line: 'you shall not pass1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/you shall not pass2.mp3?raw=true',
      line: 'you shall not pass2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/you shall not pass3.mp3?raw=true',
      line: 'you shall not pass3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/youre killing me lisa.mp3?raw=true',
      line: 'youre killing me lisa',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/10lines/youre telling me.mp3?raw=true',
      line: 'youre telling me',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/99 luftballons.mp3?raw=true',
      line: '99 luftballons',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/all out of cock cant restock.mp3?raw=true',
      line: 'all out of cock cant restock',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/around the world.mp3?raw=true',
      line: 'around the world',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/backstreet boys are back.mp3?raw=true',
      line: 'backstreet boys are back',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/bad romance.mp3?raw=true',
      line: 'bad romance',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/battlefield theme.mp3?raw=true',
      line: 'battlefield theme',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/be our guest.mp3?raw=true',
      line: 'be our guest',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/be our guest2.mp3?raw=true',
      line: 'be our guest2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/before i have to leave you now.mp3?raw=true',
      line: 'before i have to leave you now',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/boys boys boys1.mp3?raw=true',
      line: 'boys boys boys1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/boys boys boys2.mp3?raw=true',
      line: 'boys boys boys2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/but first let me take a selfie1.mp3?raw=true',
      line: 'but first let me take a selfie1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/but first let me take a selfie2.mp3?raw=true',
      line: 'but first let me take a selfie2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/but first let me take a selfie3.mp3?raw=true',
      line: 'but first let me take a selfie3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/but first let me take a selfie4.mp3?raw=true',
      line: 'but first let me take a selfie4',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/but first let me take a selfie5.mp3?raw=true',
      line: 'but first let me take a selfie5',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/but looks can be deceiving.mp3?raw=true',
      line: 'but looks can be deceiving',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/but my body is telling me yes.mp3?raw=true',
      line: 'but my body is telling me yes',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/california here we come.mp3?raw=true',
      line: 'california here we come',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/call me maybe1.mp3?raw=true',
      line: 'call me maybe1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/call me maybe2.mp3?raw=true',
      line: 'call me maybe2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/chandelier.mp3?raw=true',
      line: 'chandelier',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/colonel bogey march.mp3?raw=true',
      line: 'colonel bogey march',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/cotton eye joe.mp3?raw=true',
      line: 'cotton eye joe',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/cut my life into pieces1.mp3?raw=true',
      line: 'cut my life into pieces1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/cut my life into pieces2.mp3?raw=true',
      line: 'cut my life into pieces2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/cut my life into pieces3.mp3?raw=true',
      line: 'cut my life into pieces3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/cut my life into pieces4.mp3?raw=true',
      line: 'cut my life into pieces4',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/cut my wife into pieces.mp3?raw=true',
      line: 'cut my wife into pieces',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/dancing in the moonlight.mp3?raw=true',
      line: 'dancing in the moonlight',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/despacito1.mp3?raw=true',
      line: 'despacito1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/despacito2.mp3?raw=true',
      line: 'despacito2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/despacito3.mp3?raw=true',
      line: 'despacito3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/do you know what it feels like.mp3?raw=true',
      line: 'do you know what it feels like',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/doin your mom.mp3?raw=true',
      line: 'doin your mom',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/dont cry for me1.mp3?raw=true',
      line: 'dont cry for me1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/dont cry for me2.mp3?raw=true',
      line: 'dont cry for me2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/dont cry for me3.mp3?raw=true',
      line: 'dont cry for me3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/dont cry for me4.mp3?raw=true',
      line: 'dont cry for me4',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/dont put the blame on me.mp3?raw=true',
      line: 'dont put the blame on me',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/ducktails.mp3?raw=true',
      line: 'ducktails',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/duel of the fates.mp3?raw=true',
      line: 'duel of the fates',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/everyday im shuffling.mp3?raw=true',
      line: 'everyday im shuffling',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/eye of the tiger.mp3?raw=true',
      line: 'eye of the tiger',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/friday.mp3?raw=true',
      line: 'friday',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/gay fish.mp3?raw=true',
      line: 'gay fish',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/grenade1.mp3?raw=true',
      line: 'grenade1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/grenade2.mp3?raw=true',
      line: 'grenade2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/hello1.mp3?raw=true',
      line: 'hello1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/hello2.mp3?raw=true',
      line: 'hello2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/help1.mp3?raw=true',
      line: 'help1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/help2.mp3?raw=true',
      line: 'help2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/higher and higher baby.mp3?raw=true',
      line: 'higher and higher baby',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/hit me baby1.mp3?raw=true',
      line: 'hit me baby1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/hit me baby2.mp3?raw=true',
      line: 'hit me baby2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/hit me baby3.mp3?raw=true',
      line: 'hit me baby3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/house of the rising sun.mp3?raw=true',
      line: 'house of the rising sun',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/i am a doggie.mp3?raw=true',
      line: 'i am a doggie',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/i am the one and only.mp3?raw=true',
      line: 'i am the one and only',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/i didnt mean to make you cry.mp3?raw=true',
      line: 'i didnt mean to make you cry',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/i remember when i lost my mind1.mp3?raw=true',
      line: 'i remember when i lost my mind1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/i remember when i lost my mind2.mp3?raw=true',
      line: 'i remember when i lost my mind2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/i remember when i lost my mind3.mp3?raw=true',
      line: 'i remember when i lost my mind3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/i remember when i lost my mind4.mp3?raw=true',
      line: 'i remember when i lost my mind4',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/i will remember you1.mp3?raw=true',
      line: 'i will remember you1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/i will remember you2.mp3?raw=true',
      line: 'i will remember you2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/i will remember you3.mp3?raw=true',
      line: 'i will remember you3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/i will remember you4.mp3?raw=true',
      line: 'i will remember you4',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/i will remember you5.mp3?raw=true',
      line: 'i will remember you5',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/i will remember you6.mp3?raw=true',
      line: 'i will remember you6',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/i will remember you7.mp3?raw=true',
      line: 'i will remember you7',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/i will survive.mp3?raw=true',
      line: 'i will survive',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/ill give you what you want.mp3?raw=true',
      line: 'ill give you what you want',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/im a believer.mp3?raw=true',
      line: 'im a believer',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/im bringing sexy back.mp3?raw=true',
      line: 'im bringing sexy back',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/im bringing sexy back2.mp3?raw=true',
      line: 'im bringing sexy back2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/im hashem lo yivneh bayis.mp3?raw=true',
      line: 'im hashem lo yivneh bayis',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/im lovin it.mp3?raw=true',
      line: 'im lovin it',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/im walking on shitsand(sun shine).mp3?raw=true',
      line: 'im walking on shitsand(sun shine)',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/immigrant song.mp3?raw=true',
      line: 'immigrant song',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/immigrant song2.mp3?raw=true',
      line: 'immigrant song2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/indiana jones.mp3?raw=true',
      line: 'indiana jones',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/is it me youre looking for.mp3?raw=true',
      line: 'is it me youre looking for',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/is this real life.mp3?raw=true',
      line: 'is this real life',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/it doesnt even matter.mp3?raw=true',
      line: 'it doesnt even matter',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/its beginning to look a lot like christmas.mp3?raw=true',
      line: 'its beginning to look a lot like christmas',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/jaws theme.mp3?raw=true',
      line: 'jaws theme',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/jizz in your pants.mp3?raw=true',
      line: 'jizz in your pants',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/killing me softly with his words.mp3?raw=true',
      line: 'killing me softly with his words',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/kitty cat dance.mp3?raw=true',
      line: 'kitty cat dance',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/ku menangis.mp3?raw=true',
      line: 'ku menangis',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/last christmas1.mp3?raw=true',
      line: 'last christmas1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/last christmas2.mp3?raw=true',
      line: 'last christmas2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/let me smell yo dick1.mp3?raw=true',
      line: 'let me smell yo dick1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/let me smell yo dick2.mp3?raw=true',
      line: 'let me smell yo dick2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/let me smell yo dick3.mp3?raw=true',
      line: 'let me smell yo dick3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/let me smell yo dick4.mp3?raw=true',
      line: 'let me smell yo dick4',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/lion king.mp3?raw=true',
      line: 'lion king',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/look at this photograph.mp3?raw=true',
      line: 'look at this photograph',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/look at this photograph2.mp3?raw=true',
      line: 'look at this photograph2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/make your own kind of music.mp3?raw=true',
      line: 'make your own kind of music',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/master master wheres the dreams that ive been after.mp3?raw=true',
      line: 'master master wheres the dreams that ive been after',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/mr sandman.mp3?raw=true',
      line: 'mr sandman',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/my milkshake brings all the boys to the yard.mp3?raw=true',
      line: 'my milkshake brings all the boys to the yard',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/never say never1.mp3?raw=true',
      line: 'never say never1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/never say never2.mp3?raw=true',
      line: 'never say never2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/obamas elf1.mp3?raw=true',
      line: 'obamas elf1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/obamas elf2.mp3?raw=true',
      line: 'obamas elf2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/ocean man.mp3?raw=true',
      line: 'ocean man',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/one more time.mp3?raw=true',
      line: 'one more time',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/out of my ass into your ass tonight1.mp3?raw=true',
      line: 'out of my ass into your ass tonight1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/out of my ass into your ass tonight2.mp3?raw=true',
      line: 'out of my ass into your ass tonight2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/part of where im going1.mp3?raw=true',
      line: 'part of where im going1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/part of where im going2.mp3?raw=true',
      line: 'part of where im going2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/part of where im going3.mp3?raw=true',
      line: 'part of where im going3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/part of where im going4.mp3?raw=true',
      line: 'part of where im going4',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/part of where im going5.mp3?raw=true',
      line: 'part of where im going5',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/part of where im going6.mp3?raw=true',
      line: 'part of where im going6',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/part of where im going7.mp3?raw=true',
      line: 'part of where im going7',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/pepega1.mp3?raw=true',
      line: 'pepega1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/pepega2.mp3?raw=true',
      line: 'pepega2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/pepsi man.mp3?raw=true',
      line: 'pepsi man',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/pingu.mp3?raw=true',
      line: 'pingu',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/push it to the limit.mp3?raw=true',
      line: 'push it to the limit',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/rappers delight.mp3?raw=true',
      line: 'rappers delight',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/real human being.mp3?raw=true',
      line: 'real human being',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/reigns from heaven above1.mp3?raw=true',
      line: 'reigns from heaven above1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/reigns from heaven above2.mp3?raw=true',
      line: 'reigns from heaven above2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/rickroll1.mp3?raw=true',
      line: 'rickroll1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/rickroll2.mp3?raw=true',
      line: 'rickroll2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/say something im giving up on you.mp3?raw=true',
      line: 'say something im giving up on you',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/shoulda walked away.mp3?raw=true',
      line: 'shoulda walked away',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/skater girl.mp3?raw=true',
      line: 'skater girl',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/skidiki pap pap and a pu pu pudrrr boom.mp3?raw=true',
      line: 'skidiki pap pap and a pu pu pudrrr boom',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/skidiki pap pap.mp3?raw=true',
      line: 'skidiki pap pap',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/smack that.mp3?raw=true',
      line: 'smack that',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/sneaky snitch.mp3?raw=true',
      line: 'sneaky snitch',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/somebody that i used to know1.mp3?raw=true',
      line: 'somebody that i used to know1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/somebody that i used to know2.mp3?raw=true',
      line: 'somebody that i used to know2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/somebody that i used to know3.mp3?raw=true',
      line: 'somebody that i used to know3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/somebody that i used to know4.mp3?raw=true',
      line: 'somebody that i used to know4',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/somebody that i used to know5.mp3?raw=true',
      line: 'somebody that i used to know5',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/somebody that i used to know6.mp3?raw=true',
      line: 'somebody that i used to know6',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/somebody that i used to know7.mp3?raw=true',
      line: 'somebody that i used to know7',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/somebodys watching me.mp3?raw=true',
      line: 'somebodys watching me',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/somebodys watching me2.mp3?raw=true',
      line: 'somebodys watching me2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/stayin alive1.mp3?raw=true',
      line: 'stayin alive1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/stayin alive2.mp3?raw=true',
      line: 'stayin alive2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/take everything from the inside.mp3?raw=true',
      line: 'take everything from the inside',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/take me to church.mp3?raw=true',
      line: 'take me to church',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/teenage mutant ninja turtles.mp3?raw=true',
      line: 'teenage mutant ninja turtles',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/they see me hattin.mp3?raw=true',
      line: 'they see me hattin',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/they see me maldin.mp3?raw=true',
      line: 'they see me maldin',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/they see me rollin1.mp3?raw=true',
      line: 'they see me rollin1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/they see me rollin2.mp3?raw=true',
      line: 'they see me rollin2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/theyre taking the hobbits to isengard1.mp3?raw=true',
      line: 'theyre taking the hobbits to isengard1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/theyre taking the hobbits to isengard2.mp3?raw=true',
      line: 'theyre taking the hobbits to isengard2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/throat singing.mp3?raw=true',
      line: 'throat singing',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/toss a coin1.mp3?raw=true',
      line: 'toss a coin1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/toss a coin2.mp3?raw=true',
      line: 'toss a coin2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/trololol.mp3?raw=true',
      line: 'trololol',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/turn down for what.mp3?raw=true',
      line: 'turn down for what',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/umbrella.mp3?raw=true',
      line: 'umbrella',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/video killed the radio star.mp3?raw=true',
      line: 'video killed the radio star',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/we could have had it all.mp3?raw=true',
      line: 'we could have had it all',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/we could have had it all2.mp3?raw=true',
      line: 'we could have had it all2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/what do you mean.mp3?raw=true',
      line: 'what do you mean',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/what does the fox say1.mp3?raw=true',
      line: 'what does the fox say1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/what does the fox say2.mp3?raw=true',
      line: 'what does the fox say2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/what does the fox say3.mp3?raw=true',
      line: 'what does the fox say3',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/what doesnt kill you makes you stronger.mp3?raw=true',
      line: 'what doesnt kill you makes you stronger',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/when it rains it pours.mp3?raw=true',
      line: 'when it rains it pours',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/when the moon hits the sky1.mp3?raw=true',
      line: 'when the moon hits the sky1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/when the moon hits the sky2.mp3?raw=true',
      line: 'when the moon hits the sky2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/when you try your best1.mp3?raw=true',
      line: 'when you try your best1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/when you try your best2.mp3?raw=true',
      line: 'when you try your best2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/where do we go now1.mp3?raw=true',
      line: 'where do we go now1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/where do we go now2.mp3?raw=true',
      line: 'where do we go now2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/who wants to be a millionaire.mp3?raw=true',
      line: 'who wants to be a millionaire',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/why you always lying.mp3?raw=true',
      line: 'why you always lying',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/with or without you.mp3?raw=true',
      line: 'with or without you',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/you spin my head1.mp3?raw=true',
      line: 'you spin my head1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/you spin my head2.mp3?raw=true',
      line: 'you spin my head2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/youll never see me again.mp3?raw=true',
      line: 'youll never see me again',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/zamina mina1.mp3?raw=true',
      line: 'zamina mina1',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/zamina mina2.mp3?raw=true',
      line: 'zamina mina2',
    },
    {
      url: 'https://github.com/badoge/soundboard/blob/master/forsen/random%20singing/zero to hero.mp3?raw=true',
      line: 'zero to hero',
    },
  ];
  let audio;
  document.getElementById('randomLineButton').addEventListener('click', function () {
    const randomLine = lines[Math.floor(Math.random() * lines.length)];
    if (audio) {
      audio.pause();
    }
    audio = new Audio(randomLine.url);
    audio.play();
    document.getElementById('randomLineContainer').textContent = randomLine.line;
  });
});
