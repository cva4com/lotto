/* ════ i18n ════ */
const LANGS = {
  en: { flag:'🇬🇧', label:'EN' },
  fr: { flag:'🇫🇷', label:'FR' },
  es: { flag:'🇪🇸', label:'ES' },
  de: { flag:'🇩🇪', label:'DE' },
  ja: { flag:'🇯🇵', label:'JA' },
  ko: { flag:'🇰🇷', label:'KO' },
  zh: { flag:'🇨🇳', label:'ZH' },
  vi: { flag:'🇻🇳', label:'VI' },
};
const I18N = {
  // ── UI ──
  ui_title: {
    en:'World Lottery Generator',
    vi:'Máy Quay Xổ Số Thế Giới',
    fr:'Générateur de Loterie Mondiale',
    es:'Generador de Lotería Mundial',
    de:'Weltweiter Lotteriegenerator',
    ja:'世界くじ引きジェネレータ',
    ko:'세계 복권 생성기',
    zh:'世界彩票生成器'
  },
  ui_sub: {
    en:'Generate winning numbers for lotteries across the globe',
    vi:'Tạo số trúng thưởng cho các giải xổ số trên toàn thế giới',
    fr:'Générez les numéros gagnants pour les loteries à travers le monde',
    es:'Genera los números ganadores para loterias de todo el mundo',
    de:'Erzeugen Sie Gewinnzahlen für Loterien auf der ganzen Welt',
    ja:'世界中のくじ引きで当たり番号を生成する',
    ko:'세계 각국의 복권 당첨 번호를 생성하세요',
    zh:'生成全世界彩票的中奖号码'
  },
  ui_draw: {
    en:'Draw Selected',
    vi:'Quay Chọn',
    fr:'Tirer Sélectionné',
    es:'Sortear Seleccionado',
    de:'Ausgewählt Ziehen',
    ja:'選択したくじを引く',
    ko:'선택한 복권 추첨',
    zh:'抽取已选'
  },
  ui_draw_region:{
    en:'Draw Region',
    vi:'Quay Vùng',
    fr:'Tirer Région',
    es:'Sortear Región',
    de:'Region Ziehen',
    ja:'地域を引く',
    ko:'지역 추첨',
    zh:'抽取地区'
  },
  ui_draw_all: {
    en:'Draw All Lotteries', vi:'Quay Tất Cả',
    fr:'Tirer Toutes les Loteries', es:'Sortear Todas las Loterias',
    de:'Alle Loterien Ziehen', ja:'全くじを引く',
    ko:'모든 복권 추첨', zh:'抽取全部彩票'
  },
  ui_footer: {
    en:'Numbers are randomly generated for entertainment only. Not affiliated with any official lottery.',
    vi:'Các số được tạo ngẫu nhiên chỉ cho giải trí. Không liên quan đến bất kỳ xổ số nào chính thức.',
    fr:'Les numéros sont générés aléatoirement à des fins de divertissement uniquement. Non affilié à une lotterie officielle.',
    es:'Los números se generan aleatoriamente solo para entretenimiento. No afiliado a ninguna lotería oficial.',
    de:'Die Zahlen werden zufällig nur zur Unterhaltung generiert. Nicht mit einer offiziellen Lotterie verbunden.',
    ja:'番号は娯楽のためのみランダムに生成されます。いかなる公式くじ引きにも関連しません。',
    ko:'숫자는 오락 목적으로만 무작위 생성됩니다. 공식 복권과 관련 없습니.다',
    zh:'号码仅供娱乐目的随机生成。与任何官方彩票无关。'
  },
  ui_sidebar:{
    en:'Lotteries',
    vi:'Các Giải Xổ Số',
    fr:'Loteries',
    es:'Loterias',
    de:'Loterien',
    ja:'くじ引き',
    ko:'복권',
    zh:'彩票'
  },

  // ── REGIONS ──
  r_usa:{en:'USA',vi:'Mỹ',fr:'USA',es:'USA',de:'USA',ja:'アメリカ',ko:'미국',zh:'美国'},
  r_europe:{en:'Europe',vi:'Châu Âu',fr:'Europe',es:'Europa',de:'Europa',ja:'ヨーロッパ',ko:'유럽',zh:'欧洲'},
  r_asia:{en:'Asia',vi:'Châu Á',fr:'Asie',es:'Asia',de:'Asien',ja:'アジア',ko:'아시아',zh:'亚洲'},
  r_oceania:{en:'Oceania',vi:'Châu Úc',fr:'Océanie',es:'Oceanía',de:'Ozeanien',ja:'オセアニア',ko:'오세아니아',zh:'大洋洲'},
  r_americas:{en:'Americas',vi:'Châu Mỹ',fr:'Amériques',es:'Américas',de:'Amerika',ja:'アメリカ大陸',ko:'아메리카',zh:'美洲'},
  r_africa:{en:'Africa',vi:'Châu Phi',fr:'Afrique',es:'África',de:'Afrika',ja:'アフリカ',ko:'아프리카',zh:'非洲'},
  r_mideast:{en:'Middle East',vi:'Trung Đông',fr:'Moyen-Orient',es:'Oriente Medio',de:'Nahost',ja:'中東',ko:'중동',zh:'中东'},

  // ── GROUP LABELS (shared keys) ──
  g_main:      { en:'Main Numbers',   vi:'Số chính',        fr:'Numéros principaux', es:'Números principales', de:'Hauptzahlen',     ja:'メインナンバー',  ko:'본번호',      zh:'主号码' },
  g_bonus:     { en:'Bonus',          vi:'Thưởng',          fr:'Bonus',              es:'Bonus',               de:'Bonus',           ja:'ボーナス',       ko:'보너스',      zh:'奖励球' },
  g_powerball: { en:'Powerball',      vi:'Powerball',       fr:'Powerball',          es:'Powerball',           de:'Powerball',       ja:'パワーボール',   ko:'파워볼',      zh:'强力球' },
  g_megaball:  { en:'Mega Ball',      vi:'Mega Ball',       fr:'Mega Ball',          es:'Mega Ball',           de:'Mega Ball',       ja:'メガボール',     ko:'메가볼',      zh:'美佳球' },
  g_lucky:     { en:'Lucky Ball',     vi:'Bóng May Mắn',    fr:'Boule Chance',       es:'Bola de Suerte',      de:'Glückskugel',     ja:'ラッキーボール', ko:'행운의 볼',   zh:'幸运球' },
  g_stars:     { en:'Lucky Stars',    vi:'Ngôi Sao May Mắn',fr:'Étoiles Chanceuses', es:'Estrellas de Suerte', de:'Glückssterne',    ja:'ラッキースター', ko:'행운의 별',   zh:'幸运星' },
  g_euro:      { en:'Euro Numbers',   vi:'Số Euro',         fr:'Numéros Euro',       es:'Números Euro',        de:'Euro-Zahlen',     ja:'ユーロナンバー', ko:'유로 번호',   zh:'欧元号码' },
  g_chance:    { en:'Numéro Chance',  vi:'Số May Mắn',      fr:'Numéro Chance',      es:'Número de Suerte',   de:'Glückszahl',      ja:'チャンスナンバー','ko':'행운 번호',  zh:'幸运号码' },
  g_superzahl: { en:'Super Zahl',     vi:'Super Số',        fr:'Super Nombre',       es:'Número Super',        de:'Super Zahl',      ja:'スーパー数',     ko:'슈퍼 숫자',   zh:'超级号码' },
  g_key:       { en:'Key Number',     vi:'Số Chìa',         fr:'Numéro Clé',         es:'Número Clave',        de:'Schlüsselzahl',   ja:'キーナンバー',   ko:'키 번호',     zh:'关键号码' },
  g_zusatz:    { en:'Zusatzzahl',     vi:'Số Thêm',         fr:'Numéro Supplémentaire', es:'Número Adicional', de:'Zusatzzahl',      ja:'追加番号',       ko:'추가 번호',   zh:'附加号码' },
  g_lucky_num: { en:'Lucky Number',   vi:'Số May Mắn',      fr:'Nombre Chanceux',    es:'Número de Suerte',   de:'Glückszahl',      ja:'ラッキーナンバー','ko':'행운 번호',  zh:'幸运号码' },
  g_plus:      { en:'Plus Number',    vi:'Số Plus',         fr:'Numéro Plus',        es:'Número Plus',         de:'Plus-Zahl',       ja:'プラス番号',     ko:'플러스 번호', zh:'加号码' },
  g_special:   { en:'Special',        vi:'Đặc Biệt',        fr:'Spécial',            es:'Especial',            de:'Spezial',         ja:'スペシャル',     ko:'특별',        zh:'特殊球' },
  g_6digit:    { en:'6-Digit Number', vi:'Số 6 Chữ Số',     fr:'Numéro 6 Chiffres',  es:'Número de 6 Dígitos', de:'6-Stellige Zahl', ja:'6桁の番号',      ko:'6자리 숫자',  zh:'6位号码' },
  g_4digit:    { en:'4-Digit Number', vi:'Số 4 Chữ Số',     fr:'Numéro 4 Chiffres',  es:'Número de 4 Dígitos', de:'4-Stellige Zahl', ja:'4桁の番号',      ko:'4자리 숫자',  zh:'4位号码' },
  g_3digit:    { en:'3-Digit Number', vi:'Số 3 Chữ Số',     fr:'Numéro 3 Chiffres',  es:'Número de 3 Dígitos', de:'3-stellige Zahl', ja:'3桁の番号',      ko:'3자리 숫자',  zh:'3位号码' },
  g_additional:{ en:'Additional',     vi:'Thêm',            fr:'Supplémentaire',     es:'Adicional',           de:'Zusätzlich',      ja:'追加',           ko:'추가',        zh:'附加' },
  g_supp:      { en:'Supplementary',  vi:'Hỗ Trợ',         fr:'Supplémentaire',     es:'Suplementario',       de:'Ergänzend',       ja:'補充',           ko:'보충',        zh:'补充球' },
  g_bonus_ball:{ en:'Bonus Ball',     vi:'Bóng Thưởng',     fr:'Boule Bonus',        es:'Bola Bonus',          de:'Bonuskugel',      ja:'ボーナスボール', ko:'보너스 볼',   zh:'奖励球' },

  // ── LOTTERY NAMES ──
  l_powerball:        { en:'Powerball',          vi:'Powerball',           fr:'Powerball',          es:'Powerball',           de:'Powerball',           ja:'パワーボール',     ko:'파워볼',           zh:'强力球' },
  l_powerball_sub:    { en:'USA – Multi-State',  vi:'Mỹ – Đa Bang',       fr:'USA – Multi-État',   es:'USA – Multi-Estado',  de:'USA – Multi-Staat',  ja:'アメリカ – 複数州', ko:'미국 – 다주',      zh:'美国 – 多州' },
  l_megamillions:     { en:'Mega Millions',      vi:'Mega Millions',       fr:'Mega Millions',      es:'Mega Millions',       de:'Mega Millions',       ja:'メガミリオンズ',    ko:'메가밀리언즈',     zh:'美佳百万' },
  l_luckylife:        { en:'Lucky for Life',     vi:'May Mắn Trọn Đời',    fr:'Lucky for Life',     es:'Lucky for Life',      de:'Lucky for Life',      ja:'一生のラッキー',    ko:'평생의 행운',      zh:'终身幸运' },
  l_euromillions:     { en:'EuroMillions',       vi:'EuroMillions',        fr:'EuroMillions',       es:'EuroMillions',        de:'EuroMillions',        ja:'ユーロミリオンズ',  ko:'유로밀리언즈',     zh:'欧百万' },
  l_euromillions_sub: { en:'Europe – 9 Countries', vi:'Châu Âu – 9 Quốc Gia', fr:'Europe – 9 Pays', es:'Europa – 9 Países',  de:'Europa – 9 Länder',  ja:'ヨーロッパ – 9国', ko:'유럽 – 9개국',    zh:'欧洲 – 9国' },
  l_eurojackpot:      { en:'EuroJackpot',        vi:'EuroJackpot',         fr:'EuroJackpot',        es:'EuroJackpot',         de:'EuroJackpot',         ja:'ユーロジャックポット','ko':'유로잭포트',    zh:'欧元大奖' },
  l_eurojackpot_sub:  { en:'Europe – 18 Countries', vi:'Châu Âu – 18 Quốc Gia', fr:'Europe – 18 Pays', es:'Europa – 18 Países', de:'Europa – 18 Länder', ja:'ヨーロッパ – 18国', ko:'유럽 – 18개국', zh:'欧洲 – 18国' },
  l_uk_lotto:         { en:'UK Lotto',           vi:'Xổ Số Anh',          fr:'Loterie UK',         es:'Lotería UK',          de:'UK Lotto',            ja:'UK Lotto',          ko:'영국 로또',        zh:'英国彩票' },
  l_uk_sub:           { en:'United Kingdom',     vi:'Vương Quốc Anh',      fr:'Royaume-Uni',       es:'Reino Unido',         de:'Vereinigtes Königreich','ja':'イギリス',       ko:'영국',             zh:'英国' },
  l_fr_loto:          { en:'Loto',               vi:'Xổ Số Pháp',         fr:'Loto',               es:'Lotería Francia',     de:'Loto',                ja:'フランスロト',      ko:'프랑스 로또',      zh:'法国彩票' },
  l_fr_sub:           { en:'France – FDJ',       vi:'Pháp – FDJ',          fr:'France – FDJ',       es:'Francia – FDJ',       de:'Frankreich – FDJ',    ja:'フランス – FDJ',   ko:'프랑스 – FDJ',    zh:'法国 – FDJ' },
  l_de_lotto:         { en:'Lotto 6aus49',       vi:'Lotto 6/49 Đức',      fr:'Lotto 6aus49',       es:'Lotto 6aus49',        de:'Lotto 6aus49',        ja:'ドイツロトto 6aus49','ko':'독일 로또 6aus49', zh:'德国彩票 6aus49' },
  l_de_sub:           { en:'Deutschland',        vi:'Đức',                 fr:'Allemagne',          es:'Alemania',            de:'Deutschland',         ja:'ドイツ',            ko:'독일',             zh:'德国' },
  l_it_sena:          { en:'SuperEnalotto',      vi:'SuperEnalotto',       fr:'SuperEnalotto',      es:'SuperEnalotto',       de:'SuperEnalotto',       ja:'スーパーエナロotto', ko:'이탈리아 슈퍼', zh:'意大利超级彩票' },
  l_it_sub:           { en:'Italy – GTECH',      vi:'Italy – GTECH',       fr:'Italie – GTECH',     es:'Italia – GTECH',      de:'Italien – GTECH',     ja:'イタリア – GTECH', ko:'이탈리아 – GTECH', zh:'意大利 – GTECH' },
  l_es_gordo:         { en:'El Gordo',           vi:'El Gordo',            fr:'El Gordo',           es:'El Gordo',            de:'El Gordo',            ja:'エル・ゴルド',     ko:'엘 고르도',        zh:'大奖' },
  l_es_sub:           { en:'Spain – National',   vi:'Tây Ban Nha',         fr:'Espagne – National', es:'España – Nacional',   de:'Spanien – National',  ja:'スペイン – 国立',   ko:'스페인 – 국립',    zh:'西班牙 – 国立' },
  l_nl_lotto:         { en:'Lotto',              vi:'Xổ Số Hà Lan',       fr:'Loterie Pays-Bas',   es:'Lotería Holanda',     de:'Lotto',               ja:'オランダロット',    ko:'네덜란드 로또',    zh:'荷兰彩票' },
  l_nl_sub:           { en:'Netherlands',        vi:'Hà Lan',              fr:'Pays-Bas',           es:'Holanda',             de:'Niederlande',         ja:'オランダ',          ko:'네덜란드',         zh:'荷兰' },
  l_at_lotto:         { en:'Lotto 6aus45',       vi:'Lotto 6/45 Áo',       fr:'Lotto 6aus45',       es:'Lotto 6aus45',        de:'Lotto 6aus45',        ja:'オーストリアロット','ko':'오스트리아 로또', zh:'奥地利彩票' },
  l_at_sub:           { en:'Austria',            vi:'Áo',                  fr:'Autriche',           es:'Austria',             de:'Österreich',          ja:'オーストリア',      ko:'오스트리아',       zh:'奥地利' },
  l_ch_lotto:         { en:'Swiss Lotto',        vi:'Xổ Số Thụy Sĩ',      fr:'Lotto Suisse',       es:'Lotería Suiza',       de:'Swiss Lotto',         ja:'スイスロット',      ko:'스위스 로또',      zh:'瑞士彩票' },
  l_ch_sub:           { en:'Switzerland – Swisslos', vi:'Thụy Sĩ',         fr:'Suisse – Swisslos',  es:'Suiza – Swisslos',    de:'Schweiz – Swisslos',  ja:'スイス – スイスロス','ko':'스위스 – 스위스로스', zh:'瑞士 – Swisslos' },
  l_pl_lotto:         { en:'Lotto 5z42',         vi:'Lotto 5/42 Ba Lan',   fr:'Lotto 5z42',         es:'Lotto 5z42',          de:'Lotto 5z42',          ja:'ポーランドロット',  ko:'폴란드 로또',      zh:'波兰彩票' },
  l_pl_sub:           { en:'Poland',             vi:'Ba Lan',              fr:'Pologne',            es:'Polonia',             de:'Polen',               ja:'ポーランド',        ko:'폴란드',           zh:'波兰' },
  l_ie_lotto:         { en:'Lotto',              vi:'Xổ Số Ireland',       fr:'Loterie Irlande',    es:'Lotería Irlanda',     de:'Lotto',               ja:'アイルランドロット','ko':'아일랜드 로또',   zh:'爱尔兰彩票' },
  l_ie_sub:           { en:'Ireland – An Post',  vi:'Ireland – An Post',   fr:'Irlande – An Post',  es:'Irlanda – An Post',   de:'Irland – An Post',    ja:'アイルランド',      ko:'아일랜드',         zh:'爱尔兰' },
  l_jp_l6:            { en:'Lotto 6',            vi:'Lotto 6 Nhật',        fr:'Lotto 6 Japon',      es:'Lotto 6 Japón',       de:'Lotto 6 Japan',       ja:'ロットto 6',        ko:'일본 로또 6',      zh:'日本彩票 6' },
  l_jp_sub:           { en:'Japan – JCL',        vi:'Nhật Bản – JCL',      fr:'Japon – JCL',        es:'Japón – JCL',         de:'Japan – JCL',         ja:'日本 – JCL',        ko:'일본 – JCL',       zh:'日本 – JCL' },
  l_jp_l7:            { en:'Lotto 7',            vi:'Lotto 7 Nhật',        fr:'Lotto 7 Japon',      es:'Lotto 7 Japón',       de:'Lotto 7 Japan',       ja:'ロットto 7',        ko:'일본 로또 7',      zh:'日本彩票 7' },
  l_kr_lotto:         { en:'Lotto 6/45',         vi:'Lotto 6/45 Hàn',      fr:'Lotto 6/45 Corée',   es:'Lotto 6/45 Corea',    de:'Lotto 6/45 Südkorea', ja:'韓国ロット',        ko:'한국 로또 6/45',   zh:'韩国彩票 6/45' },
  l_kr_sub:           { en:'South Korea',        vi:'Hàn Quốc',            fr:'Corée du Sud',       es:'Corea del Sur',       de:'Südkorea',            ja:'韓国',              ko:'한국',             zh:'韩国' },
  l_in_lotto:         { en:'Powertrolla',        vi:'Powertrolla India',   fr:'Powertrolla',        es:'Powertrolla',         de:'Powertrolla',         ja:'インドロット',      ko:'인도 파워트롤라',  zh:'印度彩票' },
  l_in_sub:           { en:'India – Kerala',     vi:'Ấn Độ – Kerala',      fr:'Inde – Kerala',      es:'India – Kerala',      de:'Indien – Kerala',     ja:'インド – ケララ',   ko:'인도 – 케ralа',   zh:'印度 – 喀拉拉' },
  l_cn_lotto:         { en:'Welfare Lottery',    vi:'Xổ Số Phúc Lợi',      fr:'Loterie Sociale',    es:'Lotería Social',      de:'Wohlfahrtslotterie',  ja:'福利宝ロット',      ko:'중국 복지복권',    zh:'福利彩票' },
  l_cn_sub:           { en:'China',              vi:'Trung Quốc',          fr:'Chine',              es:'China',               de:'China',               ja:'中国',              ko:'중국',             zh:'中国' },
  l_tw_lotto:         { en:'Lotto 6/45',         vi:'Lotto 6/45 Đài Loan', fr:'Lotto 6/45 Taïwan',  es:'Lotto 6/45 Taiwán',   de:'Lotto 6/45 Taiwan',   ja:'台湾ロット',        ko:'타이완 로또',      zh:'台湾彩票' },
  l_tw_sub:           { en:'Taiwan – TCPC',      vi:'Đài Loan – TCPC',     fr:'Taïwan – TCPC',      es:'Taiwán – TCPC',       de:'Taiwan – TCPC',       ja:'台湾 – TCPC',       ko:'타이완 – TCPC',    zh:'台湾 – TCPC' },
  l_ph_lotto:         { en:'Lotto 6/49',         vi:'Lotto 6/49 Philippines', fr:'Lotto 6/49 Phil.', es:'Lotto 6/49 Filipinas', de:'Lotto 6/49 Philippinen', ja:'フィリピンロット', ko:'필리핀 로또',     zh:'菲律宾彩票' },
  l_ph_sub:           { en:'Philippines – PCSO', vi:'Philippines – PCSO',  fr:'Philippines – PCSO', es:'Filipinas – PCSO',    de:'Philippinen – PCSO',  ja:'フィリピン – PCSO', ko:'필리핀 – PCSO',   zh:'菲律宾 – PCSO' },
  l_th_lotto:         { en:'Thai Lottery',       vi:'Xổ Số Thái',         fr:'Loterie Thaïe',      es:'Lotería Tailandesa',  de:'Thailändische Lotterie','ja':'タイロット',     ko:'태국 복권',        zh:'泰国彩票' },
  l_th_sub:           { en:'Thailand',           vi:'Thái Lan',            fr:'Thaïlande',          es:'Tailandia',           de:'Thailand',            ja:'タイ',              ko:'태국',             zh:'泰国' },
  l_sg_toto:          { en:'TOTO',               vi:'TOTO Singapore',      fr:'TOTO Singapore',     es:'TOTO Singapur',       de:'TOTO Singapur',       ja:'シンガポールトトto','ko':'싱가포르 토토',  zh:'新加坡TOTO' },
  l_sg_sub:           { en:'Singapore – Pools',  vi:'Singapore – Pools',   fr:'Singapore – Pools',  es:'Singapur – Pools',    de:'Singapur – Pools',    ja:'シンガポール',      ko:'싱가포르',         zh:'新加坡' },
  l_my_4d:            { en:'4D Lottery',         vi:'Xổ Số 4D Malaysia',   fr:'Loterie 4D Malaisie', es:'Lotería 4D Malasia', de:'4D-Lotterie Malaysia', ja:'マレーシア4D',      ko:'말레이시아 4D',    zh:'马来西亚4D' },
  l_my_sub:           { en:'Malaysia – Sports Toto', vi:'Malaysia – Sports Toto', fr:'Malaisie – Sports Toto', es:'Malasia – Sports Toto', de:'Malaysia – Sports Toto', ja:'マレーシア',    ko:'말레이시아',       zh:'马来西亚' },
  l_vn_5_35:          { en:'Lotto 5/35',         vi:'Xổ Số Lotto 5/35',    fr:'Lotto 5/35',         es:'Lotto 5/35',          de:'Lotto 5/35',          ja:'ロト 5/35',         ko:'로또 5/35',       zh:'乐透 5/35' },
  l_vn_6_45:          { en:'Mega 6/45',          vi:'Xổ Số Mega 6/45',     fr:'Mega 6/45',          es:'Mega 6/45',           de:'Mega 6/45',           ja:'Mega 6/45',         ko:'Mega 6/45',       zh:'Mega 6/45' },
  l_vn_6_55:          { en:'Power 6/55',         vi:'Xổ Số Power 6/55',    fr:'Power 6/55',         es:'Power 6/55',          de:'Power 6/55',          ja:'Power 6/55',        ko:'Power 6/55',      zh:'Power 6/55' },
  l_vn_max3d:         { en:'Max 3D',             vi:'Max 3D',              fr:'Max 3D',             es:'Max 3D',              de:'Max 3D',              ja:'Max 3D',            ko:'Max 3D',          zh:'Max 3D' },
  l_vn_bingo18:       { en:'Bingo 18',           vi:'Bingo 18',            fr:'Bingo 18',           es:'Bingo 18',            de:'Bingo 18',            ja:'Bingo 18',          ko:'Bingo 18',        zh:'Bingo 18' },
  l_vn_keno:          { en:'Keno',               vi:'Keno',                fr:'Keno',               es:'Keno',                de:'Keno',                ja:'Keno',              ko:'Keno',            zh:'Keno' },
  l_vn_sub:           { en:'Vietnam',            vi:'Việt Nam',            fr:'Vietnam',            es:'Vietnam',             de:'Vietnam',             ja:'ベトナム',           ko:'베트남',          zh:'越南' },
  l_au_pb:            { en:'Powerball',          vi:'Powerball Úc',        fr:'Powerball Australie', es:'Powerball Australia',  de:'Powerball Australien', ja:'オーストラリアPB', ko:'호주 파워볼',     zh:'澳大利亚强力球' },
  l_au_pb_sub:        { en:'Australia – The Lottery Corp', vi:'Úc',        fr:'Australie',          es:'Australia',           de:'Australien',          ja:'オーストラリア',    ko:'호주',             zh:'澳大利亚' },
  l_au_oz:            { en:'Oz Lotto',           vi:'Oz Lotto Úc',         fr:'Oz Lotto',           es:'Oz Lotto',            de:'Oz Lotto',            ja:'オズロット',        ko:'호주 오즈로또',    zh:'澳大利亚Oz彩票' },
  l_nz_lotto:         { en:'Lotto NZ',           vi:'Lotto New Zealand',   fr:'Lotto NZ',           es:'Lotto NZ',            de:'Lotto NZ',            ja:'ニュジーランドロット','ko':'뉴질란드 로또',  zh:'新西兰彩票' },
  l_nz_sub:           { en:'New Zealand – NZMC', vi:'New Zealand – NZMC',  fr:'Nouvelle-Zélande',   es:'Nueva Zelanda',       de:'Neuseeland',          ja:'ニュジーランド',    ko:'뉴질란드',         zh:'新西兰' },
  l_ca_649:           { en:'Lotto 6/49',         vi:'Lotto 6/49 Canada',   fr:'Lotto 6/49 Canada',  es:'Lotto 6/49 Canadá',   de:'Lotto 6/49 Kanada',   ja:'カナダロット',      ko:'캐나다 로또 6/49', zh:'加拿大彩票 6/49' },
  l_ca_sub:           { en:'Canada – OLG',       vi:'Canada – OLG',        fr:'Canada – OLG',       es:'Canadá – OLG',        de:'Kanada – OLG',        ja:'カナダ – OLG',      ko:'캐나다 – OLG',    zh:'加拿大 – OLG' },
  l_ca_h2h:           { en:'Head to Head',       vi:'Đầu Đầu Canada',      fr:'Head to Head',       es:'Head to Head',        de:'Head to Head',        ja:'ヘッドトヘッド',    ko:'캐나다 H2H',       zh:'加拿大 H2H' },
  l_br_mega:          { en:'Mega-Sena',          vi:'Mega-Sena Brazil',    fr:'Mega-Sena Brésil',   es:'Mega-Sena Brasil',    de:'Mega-Sena Brasilien', ja:'ブラジルメガセナ',  ko:'브라질 메가세나',  zh:'巴西Mega-Sena' },
  l_br_sub:           { en:'Brazil – Caixa',     vi:'Brazil – Caixa',      fr:'Brésil – Caixa',     es:'Brasil – Caixa',      de:'Brasilien – Caixa',   ja:'ブラジル – Caixa',  ko:'브라질 – Caixa',  zh:'巴西 – Caixa' },
  l_br_quina:         { en:'Quina',              vi:'Quina Brazil',        fr:'Quina Brésil',       es:'Quina Brasil',        de:'Quina Brasilien',     ja:'ブラジルキナ',      ko:'브라질 퀴나',      zh:'巴西Quina' },
  l_mx_loteria:       { en:'Lotería',            vi:'Xổ Số Mexico',        fr:'Loterie Mexique',    es:'Lotería México',      de:'Lotterie Mexiko',     ja:'メキシコロット',    ko:'멕시코 복권',      zh:'墨西哥彩票' },
  l_mx_sub:           { en:'Mexico',             vi:'Mexico',              fr:'Mexique',            es:'México',              de:'Mexiko',              ja:'メキシコ',          ko:'멕시코',           zh:'墨西哥' },
  l_ar_quini:         { en:'Quini 6',            vi:'Quini 6 Argentina',   fr:'Quini 6 Argentine',  es:'Quini 6 Argentina',   de:'Quini 6 Argentinien', ja:'アルゼンチンキニ6', ko:'아르헨티나 퀴니6', zh:'阿根廷Quini 6' },
  l_ar_sub:           { en:'Argentina',          vi:'Argentina',           fr:'Argentine',          es:'Argentina',           de:'Argentinien',         ja:'アルゼンチン',      ko:'아르헨티나',       zh:'阿根廷' },
  l_za_lotto:         { en:'Lotto',              vi:'Xổ Số Nam Phi',       fr:'Loterie Afrique du Sud', es:'Lotería Sudáfrica', de:'Lotto Südafrika',   ja:'南アフリカロット',  ko:'남아프리카 로또',  zh:'南非彩票' },
  l_za_sub:           { en:'South Africa',       vi:'Nam Phi',             fr:'Afrique du Sud',     es:'Sudáfrica',           de:'Südafrika',           ja:'南アフリカ',        ko:'남아프리카',       zh:'南非' },
  l_za_pb:            { en:'PowerBall',          vi:'PowerBall Nam Phi',   fr:'PowerBall Afrique du Sud', es:'PowerBall Sudáfrica', de:'PowerBall Südafrika', ja:'南アフリカPB',    ko:'남아프리카 파워볼', zh:'南非强力球' },
  l_ng_lotto:         { en:'Lucky Dip',          vi:'Xổ Số Nigeria',       fr:'Loterie Nigeria',    es:'Lotería Nigeria',     de:'Lotterie Nigeria',    ja:'ナイジェリアロット','ko':'나이제리아 로또',  zh:'尼日利亚彩票' },
  l_ng_sub:           { en:'Nigeria',            vi:'Nigeria',             fr:'Nigeria',            es:'Nigeria',             de:'Nigeria',             ja:'ナイジェリア',      ko:'나이제리아',       zh:'尼日利亚' },
  l_ke_lotto:         { en:'Powerball',          vi:'Powerball Kenya',     fr:'Powerball Kenya',    es:'Powerball Kenia',     de:'Powerball Kenia',     ja:'ケニアPB',          ko:'케냐 파워볼',      zh:'肯尼亚强力球' },
  l_ke_sub:           { en:'Kenya – Gaming Board', vi:'Kenya',             fr:'Kenya',              es:'Kenia',               de:'Kenia',               ja:'ケニア',            ko:'케냐',             zh:'肯尼亚' },
  l_il_lotto:         { en:'Lotto',              vi:'Xổ Số Israel',        fr:'Loterie Israël',     es:'Lotería Israel',      de:'Lotto Israel',        ja:'イスラエルロット',  ko:'이스라엘 로또',    zh:'以色列彩票' },
  l_il_sub:           { en:'Israel – Amidror',   vi:'Israel – Amidror',    fr:'Israël – Amidror',   es:'Israel – Amidror',    de:'Israel – Amidror',    ja:'イスラエル',        ko:'이스라엘',         zh:'以色列' },
  l_pk_lotto:         { en:'National Lottery',   vi:'Xổ Số Quốc Gia Pak', fr:'Loterie Nationale Pak', es:'Lotería Nacional Pak', de:'Nationallotterie Pak', ja:'パキスタン国立', ko:'파키스탄 국립복권', zh:'巴基斯坦国家彩票' },
  l_pk_sub:           { en:'Pakistan',           vi:'Pakistan',            fr:'Pakistan',           es:'Pakistán',            de:'Pakistan',            ja:'パキスタン',        ko:'파키스탄',         zh:'巴基斯坦' },
};

let currentLang = 'en'; // default English

// ── shared translator ────────────────────────────────────
function t(key) {
  const row = I18N[key];
  if (!row) return key;
  return row[currentLang] || row['en'] || key;
}

/* ════ REGIONS ════ */
const REGIONS=[
  {key:'r_usa',ids:['powerball','megamillions','luckylife']},
  {key:'r_europe',ids:['euromillions','eurojackpot','uk_lotto','fr_loto','de_lotto','it_sena','es_gordo','nl_lotto','at_lotto','ch_lotto','pl_lotto','ie_lotto']},
  {key:'r_asia',ids:['jp_l6','jp_l7','kr_lotto','in_lotto','cn_lotto','tw_lotto','ph_lotto','th_lotto','sg_toto','my_4d','vn_5_35','vn_6_45','vn_6_55','vn_max3d','vn_bingo18','vn_keno']},
  {key:'r_oceania',ids:['au_pb','au_oz','nz_lotto']},
  {key:'r_americas',ids:['ca_649','ca_h2h','br_mega','br_quina','mx_loteria','ar_quini']},
  {key:'r_africa',ids:['za_lotto','za_pb','ng_lotto','ke_lotto']},
  {key:'r_mideast',ids:['il_lotto','pk_lotto']}
];

// ============================================================
// BASE CLASS — shared rendering & random logic
// ============================================================
class BaseLottery {
  constructor(cfg) {
    this.id       = cfg.id;
    this.nameKey  = cfg.nameKey;      // i18n key for name
    this.country  = cfg.country;
    this.subKey   = cfg.subKey;       // i18n key for subtitle
    this.groups   = cfg.groups;       // { labelKey, min, max, count, palette }
  }

  static randRange(min, max, count) {
    const pool = [];
    for (let i = min; i <= max; i++) pool.push(i);
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, count).sort((a, b) => a - b);
  }

  draw() {
    return this.groups.map(g => ({
      label   : t(g.labelKey),
      numbers : BaseLottery.randRange(g.min, g.max, g.count),
      palette : g.palette
    }));
  }

  static renderBall(num, palette, size = 40) {
    const { bg, text, shine } = palette;
    const r   = size / 2;
    const uid = `b${num}_${Math.random().toString(36).slice(2,7)}`;
    return `<svg class="ball-svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <defs>
        <radialGradient id="g_${uid}" cx="38%" cy="35%" r="60%">
          <stop offset="0%" stop-color="${shine}"/>
          <stop offset="45%" stop-color="${bg}"/>
          <stop offset="100%" stop-color="color-mix(in srgb, ${bg} 60%, #000)"/>
        </radialGradient>
        <radialGradient id="sh_${uid}" cx="50%" cy="50%" r="50%">
          <stop offset="70%" stop-color="transparent"/>
          <stop offset="100%" stop-color="rgba(0,0,0,.35)"/>
        </radialGradient>
      </defs>
      <ellipse cx="${r}" cy="${size-2.5}" rx="${r-2}" ry="2" fill="rgba(0,0,0,.4)"/>
      <circle cx="${r}" cy="${r}" r="${r-2}" fill="url(#g_${uid})"/>
      <circle cx="${r}" cy="${r}" r="${r-2}" fill="url(#sh_${uid})"/>
      <circle cx="${r*.62}" cy="${r*.42}" r="${r*.15}" fill="rgba(255,255,255,.45)"/>
      <text x="${r}" y="${r+size*.14}" text-anchor="middle"
            font-family="'Orbitron',sans-serif" font-weight="700"
            font-size="${num>=100?size*.27:size*.32}" fill="${text}">${num}</text>
    </svg>`;
  }

  renderCard(results) {
    let groupsHtml = '';
    if (results) {
      groupsHtml = results.map(g => `
        <div class="ball-group">
          <div class="ball-group-label">${g.label}</div>
          <div class="ball-row">${g.numbers.map(n => BaseLottery.renderBall(n, g.palette)).join('')}</div>
        </div>`).join('');
    } else {
      groupsHtml = this.groups.map(g => `
        <div class="ball-group">
          <div class="ball-group-label">${t(g.labelKey)}</div>
          <div class="ball-row" style="opacity:.18">${Array.from({length:g.count},(_,i)=>BaseLottery.renderBall(g.min+i,g.palette)).join('')}</div>
        </div>`).join('');
    }
    return `<div class="card" id="card-${this.id}">
      <div class="card-header">
        <span class="flag">${this.country}</span>
        <div>
          <div class="card-title">${t(this.nameKey)}</div>
          <div class="card-sub">${t(this.subKey)}</div>
        </div>
      </div>${groupsHtml}</div>`;
  }
}

// ============================================================
// COLOUR PALETTES
// ============================================================
const PAL = {
  white  :{ bg:'#e8e8e8', text:'#1a1a1a', shine:'#fff' },
  red    :{ bg:'#c0392b', text:'#fff',    shine:'#e74c3c' },
  blue   :{ bg:'#2980b9', text:'#fff',    shine:'#3498db' },
  green  :{ bg:'#27ae60', text:'#fff',    shine:'#2ecc71' },
  purple :{ bg:'#8e44ad', text:'#fff',    shine:'#9b59b6' },
  gold   :{ bg:'#d4a017', text:'#fff',    shine:'#f0c040' },
  orange :{ bg:'#e67e22', text:'#fff',    shine:'#f39c12' },
  navy   :{ bg:'#1a1a4e', text:'#fff',    shine:'#2c2c7a' },
  teal   :{ bg:'#16a085', text:'#fff',    shine:'#1abc9c' },
  crimson:{ bg:'#a93226', text:'#fff',    shine:'#cb4335' },
  sky    :{ bg:'#2e86c1', text:'#fff',    shine:'#5dade2' },
};

// ============================================================
// LOTTERY DEFINITIONS
// ============================================================
const LOTTERIES = [
  // USA
  new BaseLottery({ id:'powerball',  nameKey:'l_powerball',  country:'🇺🇸', subKey:'l_powerball_sub',
    groups:[{ labelKey:'g_main', min:1,max:69,count:5,palette:PAL.white },{ labelKey:'g_powerball',min:1,max:26,count:1,palette:PAL.red }]}),
  new BaseLottery({ id:'megamillions', nameKey:'l_megamillions', country:'🇺🇸', subKey:'l_powerball_sub',
    groups:[{ labelKey:'g_main', min:1,max:70,count:5,palette:PAL.gold },{ labelKey:'g_megaball',min:1,max:25,count:1,palette:PAL.blue }]}),
  new BaseLottery({ id:'luckylife', nameKey:'l_luckylife', country:'🇺🇸', subKey:'l_powerball_sub',
    groups:[{ labelKey:'g_main', min:1,max:48,count:5,palette:PAL.navy },{ labelKey:'g_lucky',min:1,max:18,count:1,palette:PAL.gold }]}),
  // EUROPE
  new BaseLottery({ id:'euromillions', nameKey:'l_euromillions', country:'🇪🇺', subKey:'l_euromillions_sub',
    groups:[{ labelKey:'g_main', min:1,max:50,count:5,palette:PAL.blue },{ labelKey:'g_stars',min:1,max:12,count:2,palette:PAL.gold }]}),
  new BaseLottery({ id:'eurojackpot', nameKey:'l_eurojackpot', country:'🇪🇺', subKey:'l_eurojackpot_sub',
    groups:[{ labelKey:'g_main', min:1,max:50,count:5,palette:PAL.navy },{ labelKey:'g_euro',min:1,max:10,count:2,palette:PAL.orange }]}),
  new BaseLottery({ id:'uk_lotto', nameKey:'l_uk_lotto', country:'🇬🇧', subKey:'l_uk_sub',
    groups:[{ labelKey:'g_main', min:1,max:59,count:6,palette:PAL.blue },{ labelKey:'g_bonus_ball',min:1,max:59,count:1,palette:PAL.gold }]}),
  new BaseLottery({ id:'fr_loto', nameKey:'l_fr_loto', country:'🇫🇷', subKey:'l_fr_sub',
    groups:[{ labelKey:'g_main', min:1,max:49,count:5,palette:PAL.blue },{ labelKey:'g_chance',min:1,max:10,count:1,palette:PAL.red }]}),
  new BaseLottery({ id:'de_lotto', nameKey:'l_de_lotto', country:'🇩🇪', subKey:'l_de_sub',
    groups:[{ labelKey:'g_main', min:1,max:49,count:6,palette:PAL.green },{ labelKey:'g_superzahl',min:0,max:9,count:1,palette:PAL.gold }]}),
  new BaseLottery({ id:'it_sena', nameKey:'l_it_sena', country:'🇮🇹', subKey:'l_it_sub',
    groups:[{ labelKey:'g_main', min:1,max:90,count:6,palette:PAL.crimson }]}),
  new BaseLottery({ id:'es_gordo', nameKey:'l_es_gordo', country:'🇪🇸', subKey:'l_es_sub',
    groups:[{ labelKey:'g_main', min:1,max:54,count:5,palette:PAL.orange },{ labelKey:'g_key',min:0,max:9,count:1,palette:PAL.red }]}),
  new BaseLottery({ id:'nl_lotto', nameKey:'l_nl_lotto', country:'🇳🇱', subKey:'l_nl_sub',
    groups:[{ labelKey:'g_main', min:1,max:45,count:6,palette:PAL.teal },{ labelKey:'g_bonus',min:1,max:45,count:1,palette:PAL.gold }]}),
  new BaseLottery({ id:'at_lotto', nameKey:'l_at_lotto', country:'🇦🇹', subKey:'l_at_sub',
    groups:[{ labelKey:'g_main', min:1,max:45,count:6,palette:PAL.blue },{ labelKey:'g_zusatz',min:1,max:45,count:1,palette:PAL.gold }]}),
  new BaseLottery({ id:'ch_lotto', nameKey:'l_ch_lotto', country:'🇨🇭', subKey:'l_ch_sub',
    groups:[{ labelKey:'g_main', min:1,max:42,count:6,palette:PAL.red },{ labelKey:'g_lucky_num',min:1,max:9,count:1,palette:PAL.gold }]}),
  new BaseLottery({ id:'pl_lotto', nameKey:'l_pl_lotto', country:'🇵🇱', subKey:'l_pl_sub',
    groups:[{ labelKey:'g_main', min:1,max:42,count:5,palette:PAL.white },{ labelKey:'g_plus',min:1,max:9,count:1,palette:PAL.blue }]}),
  new BaseLottery({ id:'ie_lotto', nameKey:'l_ie_lotto', country:'🇮🇪', subKey:'l_ie_sub',
    groups:[{ labelKey:'g_main', min:1,max:45,count:6,palette:PAL.green },{ labelKey:'g_bonus',min:1,max:45,count:1,palette:PAL.gold }]}),
  // ASIA
  new BaseLottery({ id:'jp_l6', nameKey:'l_jp_l6', country:'🇯🇵', subKey:'l_jp_sub',
    groups:[{ labelKey:'g_main', min:1,max:43,count:6,palette:PAL.crimson }]}),
  new BaseLottery({ id:'jp_l7', nameKey:'l_jp_l7', country:'🇯🇵', subKey:'l_jp_sub',
    groups:[{ labelKey:'g_main', min:1,max:31,count:7,palette:PAL.navy }]}),
  new BaseLottery({ id:'kr_lotto', nameKey:'l_kr_lotto', country:'🇰🇷', subKey:'l_kr_sub',
    groups:[{ labelKey:'g_main', min:1,max:45,count:6,palette:PAL.blue },{ labelKey:'g_bonus',min:1,max:45,count:1,palette:PAL.gold }]}),
  new BaseLottery({ id:'in_lotto', nameKey:'l_in_lotto', country:'🇮🇳', subKey:'l_in_sub',
    groups:[{ labelKey:'g_main', min:1,max:99,count:6,palette:PAL.orange }]}),
  new BaseLottery({ id:'cn_lotto', nameKey:'l_cn_lotto', country:'🇨🇳', subKey:'l_cn_sub',
    groups:[{ labelKey:'g_main', min:1,max:36,count:6,palette:PAL.red },{ labelKey:'g_special',min:1,max:36,count:1,palette:PAL.gold }]}),
  new BaseLottery({ id:'tw_lotto', nameKey:'l_tw_lotto', country:'🇹🇼', subKey:'l_tw_sub',
    groups:[{ labelKey:'g_main', min:1,max:45,count:6,palette:PAL.purple },{ labelKey:'g_bonus',min:1,max:45,count:1,palette:PAL.gold }]}),
  new BaseLottery({ id:'ph_lotto', nameKey:'l_ph_lotto', country:'🇵🇭', subKey:'l_ph_sub',
    groups:[{ labelKey:'g_main', min:1,max:49,count:6,palette:PAL.sky }]}),
  new BaseLottery({ id:'th_lotto', nameKey:'l_th_lotto', country:'🇹🇭', subKey:'l_th_sub',
    groups:[{ labelKey:'g_6digit', min:0,max:999999,count:1,palette:PAL.gold }]}),
  new BaseLottery({ id:'sg_toto', nameKey:'l_sg_toto', country:'🇸🇬', subKey:'l_sg_sub',
    groups:[{ labelKey:'g_main', min:1,max:49,count:6,palette:PAL.teal },{ labelKey:'g_additional',min:1,max:49,count:1,palette:PAL.gold }]}),
  new BaseLottery({ id:'my_4d', nameKey:'l_my_4d', country:'🇲🇾', subKey:'l_my_sub',
    groups:[{ labelKey:'g_4digit', min:0,max:9999,count:1,palette:PAL.purple }]}),
  // VIETNAM
  new BaseLottery({ id:'vn_5_35', nameKey:'l_vn_5_35', country:'🇻🇳', subKey:'l_vn_sub',
    groups:[{ labelKey:'g_main', min:1,max:35,count:5,palette:PAL.green },{ labelKey:'g_powerball',min:1,max:12,count:1,palette:PAL.orange }]}),
  new BaseLottery({ id:'vn_6_45', nameKey:'l_vn_6_45', country:'🇻🇳', subKey:'l_vn_sub',
    groups:[{ labelKey:'g_main', min:1,max:45,count:6,palette:PAL.red }]}),
  new BaseLottery({ id:'vn_6_55', nameKey:'l_vn_6_55', country:'🇻🇳', subKey:'l_vn_sub',
    groups:[{ labelKey:'g_main', min:1,max:55,count:6,palette:PAL.blue }]}),
  new BaseLottery({ id:'vn_max3d', nameKey:'l_vn_max3d', country:'🇻🇳', subKey:'l_vn_sub',
    groups:[{ labelKey:'g_3digit', min:0,max:9,count:3,palette:PAL.gold }]}),
  new BaseLottery({ id:'vn_bingo18', nameKey:'l_vn_bingo18', country:'🇻🇳', subKey:'l_vn_sub',
    groups:[{ labelKey:'g_main', min:0,max:9,count:3,palette:PAL.purple }]}),
  new BaseLottery({ id:'vn_keno', nameKey:'l_vn_keno', country:'🇻🇳', subKey:'l_vn_sub',
    groups:[{ labelKey:'g_main', min:1,max:80,count:10,palette:PAL.orange }]}),
  // OCEANIA
  new BaseLottery({ id:'au_pb', nameKey:'l_au_pb', country:'🇦🇺', subKey:'l_au_pb_sub',
    groups:[{ labelKey:'g_main', min:1,max:35,count:5,palette:PAL.blue },{ labelKey:'g_powerball',min:1,max:20,count:1,palette:PAL.red }]}),
  new BaseLottery({ id:'au_oz', nameKey:'l_au_oz', country:'🇦🇺', subKey:'l_au_pb_sub',
    groups:[{ labelKey:'g_main', min:1,max:45,count:7,palette:PAL.green },{ labelKey:'g_supp',min:1,max:45,count:2,palette:PAL.gold }]}),
  new BaseLottery({ id:'nz_lotto', nameKey:'l_nz_lotto', country:'🇳🇿', subKey:'l_nz_sub',
    groups:[{ labelKey:'g_main', min:1,max:40,count:6,palette:PAL.teal },{ labelKey:'g_bonus',min:1,max:40,count:1,palette:PAL.gold }]}),
  // AMERICAS
  new BaseLottery({ id:'ca_649', nameKey:'l_ca_649', country:'🇨🇦', subKey:'l_ca_sub',
    groups:[{ labelKey:'g_main', min:1,max:49,count:6,palette:PAL.white },{ labelKey:'g_bonus',min:1,max:49,count:1,palette:PAL.red }]}),
  new BaseLottery({ id:'ca_h2h', nameKey:'l_ca_h2h', country:'🇨🇦', subKey:'l_ca_sub',
    groups:[{ labelKey:'g_main', min:1,max:49,count:5,palette:PAL.navy },{ labelKey:'g_bonus',min:1,max:49,count:1,palette:PAL.gold }]}),
  new BaseLottery({ id:'br_mega', nameKey:'l_br_mega', country:'🇧🇷', subKey:'l_br_sub',
    groups:[{ labelKey:'g_main', min:1,max:60,count:6,palette:PAL.green }]}),
  new BaseLottery({ id:'br_quina', nameKey:'l_br_quina', country:'🇧🇷', subKey:'l_br_sub',
    groups:[{ labelKey:'g_main', min:1,max:80,count:5,palette:PAL.blue }]}),
  new BaseLottery({ id:'mx_loteria', nameKey:'l_mx_loteria', country:'🇲🇽', subKey:'l_mx_sub',
    groups:[{ labelKey:'g_main', min:1,max:45,count:6,palette:PAL.orange },{ labelKey:'g_bonus',min:1,max:45,count:1,palette:PAL.gold }]}),
  new BaseLottery({ id:'ar_quini', nameKey:'l_ar_quini', country:'🇦🇷', subKey:'l_ar_sub',
    groups:[{ labelKey:'g_main', min:1,max:46,count:6,palette:PAL.sky }]}),
  // AFRICA
  new BaseLottery({ id:'za_lotto', nameKey:'l_za_lotto', country:'🇿🇦', subKey:'l_za_sub',
    groups:[{ labelKey:'g_main', min:1,max:52,count:6,palette:PAL.green },{ labelKey:'g_bonus',min:1,max:52,count:1,palette:PAL.gold }]}),
  new BaseLottery({ id:'za_pb', nameKey:'l_za_pb', country:'🇿🇦', subKey:'l_za_sub',
    groups:[{ labelKey:'g_main', min:1,max:50,count:5,palette:PAL.navy },{ labelKey:'g_powerball',min:1,max:50,count:1,palette:PAL.orange }]}),
  new BaseLottery({ id:'ng_lotto', nameKey:'l_ng_lotto', country:'🇳🇬', subKey:'l_ng_sub',
    groups:[{ labelKey:'g_main', min:1,max:90,count:5,palette:PAL.green },{ labelKey:'g_bonus',min:1,max:90,count:1,palette:PAL.gold }]}),
  new BaseLottery({ id:'ke_lotto', nameKey:'l_ke_lotto', country:'🇰🇪', subKey:'l_ke_sub',
    groups:[{ labelKey:'g_main', min:1,max:45,count:6,palette:PAL.crimson },{ labelKey:'g_bonus',min:1,max:45,count:1,palette:PAL.gold }]}),
  // MIDDLE EAST
  new BaseLottery({ id:'il_lotto', nameKey:'l_il_lotto', country:'🇮🇱', subKey:'l_il_sub',
    groups:[{ labelKey:'g_main', min:1,max:42,count:6,palette:PAL.blue },{ labelKey:'g_bonus',min:1,max:42,count:1,palette:PAL.gold }]}),
  new BaseLottery({ id:'pk_lotto', nameKey:'l_pk_lotto', country:'🇵🇰', subKey:'l_pk_sub',
    groups:[{ labelKey:'g_main', min:1,max:99,count:5,palette:PAL.green },{ labelKey:'g_bonus',min:1,max:99,count:1,palette:PAL.gold }]}),
];
function getL(id){return LOTTERIES.find(x=>x.id===id)}

/* ════ SIDEBAR ════ */
function buildSidebar(){
  document.getElementById('sb-header').textContent=t('ui_sidebar');
  document.getElementById('sb-body').innerHTML=REGIONS.map(region=>{
    const items=region.ids.map(id=>{const l=getL(id);return '<div class="sb-item" id="sbi-'+id+'" onclick="sidebarSelect(\''+id+'\')"><span class="sb-flag">'+l.country+'</span><span class="sb-name">'+t(l.nameKey)+'</span></div>'}).join('');
    return '<div class="sb-region open" id="sbr-'+region.key+'"><div class="sb-region-head" onclick="toggleRegion(\''+region.key+'\')"><span class="region-label">'+t(region.key)+'</span><span class="region-arrow">▶</span></div><div class="sb-items">'+items+'<button class="sb-draw-region" onclick="drawRegion(\''+region.key+'\')">🎲 '+t('ui_draw_region')+'</button></div></div>';
  }).join('');
}

function toggleRegion(k){document.getElementById('sbr-'+k).classList.toggle('open')}

function sidebarSelect(id){
  document.querySelectorAll('.sb-item').forEach(e=>e.classList.remove('active'));
  document.getElementById('sbi-'+id).classList.add('active');
  const card=document.getElementById('card-'+id);
  if(card){card.scrollIntoView({behavior:'smooth',block:'center'});card.classList.add('highlight');setTimeout(()=>card.classList.remove('highlight'),1200)}
  if(window.innerWidth<=720)toggleSidebar();
}

function drawRegion(rk){const r=REGIONS.find(x=>x.key===rk);if(r)r.ids.forEach(id=>drawOne(id))}

/* ════ DRAW ════ */
function drawOne(id) {
  const lottery = LOTTERIES.find(l => l.id === id);
  if (!lottery) return;
  const card = document.getElementById('card-'+id);
  if (card) card.outerHTML = lottery.renderCard(lottery.draw());
}
function drawAll(){LOTTERIES.forEach(l=>drawOne(l.id))}

/* ════ RENDER ════ */
function renderGrid(){
  document.getElementById('lottery-grid').innerHTML=LOTTERIES.map(l=>l.renderCard(null)).join('');
  document.querySelectorAll('.card').forEach((c,i)=>{c.style.animationDelay=(i*.03)+'s'});
}

/* ════ LANG + THEME ════ */
function buildLangPills() {
  const container = document.getElementById('lang-pills');
  container.innerHTML = Object.entries(LANGS).map(([code, info]) =>
    `<button class="lang-pill${code===currentLang?' active':''}" onclick="switchLang('${code}')">${info.flag} ${info.label}</button>`
  ).join('');
}

// ── update all UI text ──
function applyLang(){
  document.getElementById('h-title').textContent=t('ui_title');
  document.getElementById('h-sub').textContent=t('ui_sub');
  document.getElementById('btn-all').textContent='🎰 '+t('ui_draw_all');
  document.getElementById('footer-text').textContent=t('ui_footer');
  buildLangPills();
  buildSidebar();
}

// ── switch language ──
function switchLang(code) {
  currentLang = code;
  applyLang();
  renderAll(); // re-render cards with new labels
}

// ── theme toggle ──
let currentTheme='light';
function toggleTheme(){
  currentTheme=currentTheme==='dark'?'light':'dark';
  document.body.setAttribute('data-theme',currentTheme);
  document.getElementById('icon-dark').classList.toggle('active',currentTheme==='dark');
  document.getElementById('icon-light').classList.toggle('active',currentTheme==='light');
}

/* ════ MOBILE SIDEBAR ════ */
function toggleSidebar(){document.getElementById('sidebar').classList.toggle('open');document.getElementById('sb-overlay').classList.toggle('open')}

// ── wire buttons ──
document.getElementById('btn-all').onclick=drawAll;

/* ════ INIT ════ */
applyLang();
renderGrid();

// globals
window.switchLang=switchLang;
window.toggleTheme=toggleTheme;
window.toggleSidebar=toggleSidebar;
window.toggleRegion=toggleRegion;
window.sidebarSelect=sidebarSelect;
window.drawRegion=drawRegion;
window.drawOne=drawOne;