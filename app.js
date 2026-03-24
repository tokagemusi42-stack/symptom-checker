// ===== 症状データ =====
const bodyData = {
  head: {
    name: '頭・顔',
    icon: '🧠',
    desc: '頭部の痛みはさまざまな原因が考えられます。緊急性の高いものもあるため、突然の激しい頭痛には注意が必要です。',
    preview: ['頭痛', 'めまい', '発熱', '目の痛み'],
    symptoms: [
      { name: '緊張型頭痛', desc: '首や肩のこりから来る締め付けられるような痛み。最もよくある頭痛。', tag: 'common', detail: { cause: '長時間の姿勢固定、デスクワーク、ストレスによる首・肩の筋肉緊張', selfCare: 'ストレッチ・温める・市販の鎮痛剤（イブプロフェン等）・定期的な休憩', whenToGo: '週3回以上または月15日以上続く場合、鎮痛剤が全く効かない場合' } },
      { name: '片頭痛（偏頭痛）', desc: 'ズキズキ脈打つような痛み。光や音に敏感になり、吐き気を伴うことも。', tag: 'common', detail: { cause: '脳の血管の拡張・炎症。ホルモン変化・睡眠不足・特定の食べ物が引き金に', selfCare: '暗くて静かな場所で安静・冷やす・市販の片頭痛薬（早めに服用が効果的）', whenToGo: '月4回以上・日常生活に支障が出る場合、または50歳以上で初めて起きた場合' } },
      { name: 'めまい（良性発作性頭位めまい症）', desc: '頭を動かしたときに起こる短時間のめまい。', tag: 'mild', detail: { cause: '内耳の耳石が三半規管に入り込むことで平衡感覚が乱れる', selfCare: 'ゆっくり動く・エプリー法（医師に習う頭の動かし方）が有効', whenToGo: '難聴・耳鳴りを伴う場合、繰り返す場合、歩けないほどひどい場合' } },
      { name: '副鼻腔炎（蓄膿症）', desc: '鼻の奥から額にかけての圧迫感・痛み。鼻づまりも伴うことが多い。', tag: 'common', detail: { cause: 'ウイルス・細菌感染やアレルギー性鼻炎の悪化による副鼻腔の炎症', selfCare: '鼻を温める・鼻洗浄（生理食塩水）・市販の鼻炎薬・十分な水分', whenToGo: '1週間以上改善しない場合、高熱・強い頭痛を伴う場合' } },
      { name: 'くも膜下出血', desc: '突然の「人生最悪」レベルの激しい頭痛。至急救急へ。', tag: 'urgent', detail: { cause: '脳動脈瘤が破裂し、くも膜下腔に出血が広がる', selfCare: '自己処置は不可能。即座に119番通報', whenToGo: '即救急（処置が遅れると死亡・重篤な後遺症のリスクが高い）' } },
    ]
  },
  neck: {
    name: '首・喉',
    icon: '🫁',
    desc: '首の痛みや喉の違和感は、疲労や感染症から重篤な疾患まで幅広い原因があります。',
    preview: ['喉の痛み', '首こり', 'リンパ腺の腫れ'],
    symptoms: [
      { name: '急性咽頭炎（のどの風邪）', desc: '細菌・ウイルスによる喉の痛み・腫れ。飲み込むと痛いことが多い。', tag: 'mild', detail: { cause: 'ライノウイルス・コロナウイルス等のウイルス感染、または溶連菌等の細菌感染', selfCare: '安静・水分補給・うがい・市販の喉の薬・のど飴', whenToGo: '高熱・飲み込めないほどの激痛・扁桃腺が白くなっている場合' } },
      { name: '頸椎症（首の骨の変形）', desc: '首から肩・腕にかけてのしびれや痛み。長時間のデスクワークで悪化。', tag: 'common', detail: { cause: '加齢による頸椎の変形・椎間板の劣化。スマホ・PC作業が長時間続くと悪化', selfCare: '姿勢改善・首のストレッチ・温める・首への過度な負荷を避ける', whenToGo: 'しびれや脱力感が強くなる場合、両手の動きが鈍くなる場合' } },
      { name: 'リンパ節炎', desc: '首のリンパ節が腫れて痛む。風邪や感染症に伴うことが多い。', tag: 'common', detail: { cause: '細菌・ウイルス感染に対する免疫反応。風邪・虫歯・口内炎などが引き金に', selfCare: '安静・十分な睡眠・水分補給', whenToGo: '2週間以上腫れが続く場合、発熱・体重減少・夜間の発汗を伴う場合' } },
      { name: '扁桃腺炎', desc: '喉の両側が赤く腫れ、高熱を伴う強い痛み。', tag: 'common', detail: { cause: '溶連菌などの細菌感染やウイルス感染による扁桃腺の炎症', selfCare: '安静・水分補給・解熱鎮痛剤・アイスクリームなど喉を冷やす食べ物', whenToGo: '39度以上の発熱・飲み込めない・4日以上症状が続く場合は受診を' } },
      { name: '甲状腺疾患', desc: '首の前部（のどぼとけ付近）の腫れ・違和感。体重変化も伴うことがある。', tag: 'common', detail: { cause: 'バセドウ病（機能亢進）・橋本病（機能低下）・甲状腺腫瘍など種類が多い', selfCare: '自己判断が難しいため早めの受診が重要', whenToGo: '首の腫れ・動悸・急な体重変化・倦怠感が続く場合は甲状腺専門医へ' } },
    ]
  },
  chest: {
    name: '胸・心臓',
    icon: '❤️',
    desc: '胸の痛みや動悸は心臓・肺・消化器のトラブルが考えられます。胸の激しい痛みは緊急性が高い場合があります。',
    preview: ['胸の痛み', '動悸', '息苦しさ', '胸焼け'],
    symptoms: [
      { name: '逆流性食道炎', desc: '胸やけ・みぞおちの痛み。食後や横になったときに悪化しやすい。', tag: 'common', detail: { cause: '食道と胃の境界の筋肉が緩み、胃酸が食道に逆流する。肥満・食後すぐ横になる習慣', selfCare: '食後3時間は横にならない・食べすぎない・高脂肪食やアルコールを避ける・市販の制酸剤', whenToGo: '2週間以上改善しない場合、飲み込みにくい・体重が減っている場合' } },
      { name: '肋間神経痛', desc: '肋骨に沿ったチクチクする痛み。呼吸や体を動かすと悪化することがある。', tag: 'mild', detail: { cause: '帯状疱疹ウイルス・姿勢不良・外傷による肋間神経の刺激や炎症', selfCare: '無理な動作を避ける・温める・市販の消炎鎮痛薬', whenToGo: '皮膚に赤い発疹が出た場合（帯状疱疹）は早めに受診。2週間以上続く場合も' } },
      { name: '狭心症・心筋梗塞', desc: '締め付けられる・押しつぶされる胸の痛み。左腕・顎への放散痛も。至急救急へ。', tag: 'urgent', detail: { cause: '冠動脈の狭窄・閉塞による心筋への血流不足。動脈硬化・高血圧・喫煙が主な要因', selfCare: '自己処置は不可。ニトログリセリンがあれば服用しつつ即119番', whenToGo: '即救急（5分以上続く胸の圧迫感は心筋梗塞の可能性。時間との勝負）' } },
      { name: '過呼吸・パニック発作', desc: '激しい動悸と息苦しさ、手足のしびれ。強いストレスや不安が引き金に。', tag: 'common', detail: { cause: '強い不安・ストレスによる過呼吸で血液中のCO2濃度が低下', selfCare: '鼻から吸って口からゆっくり吐く腹式呼吸・安心できる場所で安静', whenToGo: '繰り返す場合・日常生活に支障が出る場合は心療内科・精神科へ' } },
      { name: '気胸', desc: '突然の胸の痛みと息苦しさ。痩せ型の若い男性に多い。至急救急へ。', tag: 'urgent', detail: { cause: '肺の一部に穴が開き、胸腔に空気が漏れて肺が縮む。痩せ型の若い男性に多い', selfCare: '自己処置は不可。即119番', whenToGo: '突然の激しい胸の痛み＋息苦しさは即救急' } },
    ]
  },
  'shoulder-left': {
    name: '左肩',
    icon: '💪',
    desc: '肩の痛みは筋肉・関節・神経のトラブルが主な原因です。左肩の場合は心臓への放散痛の可能性も。',
    preview: ['肩こり', '四十肩', '腕のしびれ'],
    symptoms: [
      { name: '肩こり（筋肉の緊張）', desc: 'デスクワークやスマホの長時間使用による首・肩の筋肉の緊張。', tag: 'common', detail: { cause: '長時間の同一姿勢・筋肉への血流低下・ストレス・眼精疲労', selfCare: 'ストレッチ・温める・マッサージ・姿勢の見直し・定期的な休憩', whenToGo: '手のしびれ・頭痛・めまいを伴う場合、2週間以上改善しない場合' } },
      { name: '四十肩・五十肩（肩関節周囲炎）', desc: '腕を上げると激しく痛む。夜間痛が特徴。', tag: 'common', detail: { cause: '肩関節周囲の組織（腱・関節包）の炎症・癒着。原因が不明なことも多い', selfCare: '急性期（痛みが強い）は安静・冷却。慢性期は温めてゆっくりストレッチ', whenToGo: '激しい痛みで眠れない場合・半年以上改善しない場合は整形外科へ' } },
      { name: '頸椎椎間板ヘルニア', desc: '首から肩・腕にかけてのしびれや電気が走るような痛み。', tag: 'common', detail: { cause: '椎間板の中身が飛び出して神経根を圧迫する', selfCare: '姿勢を正す・重いものを持たない・首を温める・牽引療法', whenToGo: 'しびれ・脱力が強くなる場合、排尿障害がある場合は即受診' } },
      { name: '心臓への放散痛', desc: '左肩・左腕への痛みは心筋梗塞の兆候のことも。胸の圧迫感があれば至急救急へ。', tag: 'urgent', detail: { cause: '心臓の虚血（血流不足）による痛みが神経を通じて左肩・腕に広がる', selfCare: '自己処置は不可。胸の圧迫感を伴う場合は即119番', whenToGo: '胸の圧迫感・冷や汗・息苦しさを伴う場合は即救急' } },
    ]
  },
  'shoulder-right': {
    name: '右肩',
    icon: '💪',
    desc: '右肩の痛みは筋肉・関節・神経のトラブルが主な原因です。',
    preview: ['肩こり', '四十肩', '腕のしびれ'],
    symptoms: [
      { name: '肩こり（筋肉の緊張）', desc: 'デスクワークやスマホの長時間使用による首・肩の筋肉の緊張。', tag: 'common', detail: { cause: '長時間の同一姿勢・筋肉への血流低下・ストレス・眼精疲労', selfCare: 'ストレッチ・温める・マッサージ・姿勢の見直し・定期的な休憩', whenToGo: '手のしびれ・頭痛・めまいを伴う場合、2週間以上改善しない場合' } },
      { name: '四十肩・五十肩（肩関節周囲炎）', desc: '腕を上げると激しく痛む。夜間痛が特徴。', tag: 'common', detail: { cause: '肩関節周囲の組織の炎症・癒着。原因が不明なことも多い', selfCare: '急性期は安静・冷却。慢性期は温めてゆっくりストレッチ', whenToGo: '激しい痛みで眠れない場合・半年以上改善しない場合は整形外科へ' } },
      { name: '肩板（ローテーターカフ）断裂', desc: 'スポーツや重労働で肩の筋肉が傷ついた状態。腕を上げると痛む。', tag: 'common', detail: { cause: 'スポーツ・重労働による腱の損傷、または加齢による変性断裂', selfCare: '安静・アイシング。部分断裂はリハビリで改善することも', whenToGo: '腕が上がらない・夜間痛が続く場合は整形外科でMRI検査を' } },
      { name: '胆嚢疾患の放散痛', desc: '右肩・右肩甲骨周囲の痛みは胆嚢炎や胆石の放散痛のことも。', tag: 'common', detail: { cause: '胆嚢炎・胆石による痛みが横隔膜神経を通じて右肩に広がる', selfCare: '脂肪分の多い食事を避ける。右肩の痛みだけでは判断困難', whenToGo: '食後に右肩と右上腹部が同時に痛む場合は消化器内科へ' } },
    ]
  },
  'arm-left': {
    name: '左腕',
    icon: '🦾',
    desc: '腕の痛みやしびれは筋肉・神経・血管のトラブルが考えられます。',
    preview: ['腕のしびれ', '肘の痛み', '腕の疲れ'],
    symptoms: [
      { name: '手根管症候群', desc: '手首から指（特に親指・人差し指）にかけてのしびれや痛み。PC作業が多い人に多い。', tag: 'common', detail: { cause: '手首の正中神経が圧迫される。妊娠・更年期・PC作業過多で増加', selfCare: '手首の安静・サポーター装着・手首のストレッチ・夜間の手首の固定', whenToGo: 'しびれが強くなる場合・親指の力が弱くなった場合は整形外科へ' } },
      { name: 'テニス肘・ゴルフ肘（上腕骨外側上顆炎）', desc: '肘の外側が痛む。重いものを持つとき悪化。', tag: 'common', detail: { cause: '肘の腱の繰り返しの過負荷による微細損傷の蓄積。テニス・ゴルフ・PC作業', selfCare: '安静・アイシング・サポーター・ストレッチ', whenToGo: '2ヶ月以上改善しない場合・腕が上がらなくなった場合' } },
      { name: '頸椎ヘルニアの放散痛', desc: '首から腕にかけて電気が走るような痛みやしびれ。', tag: 'common', detail: { cause: '頸椎の椎間板が飛び出して神経根を圧迫する', selfCare: '姿勢改善・首の安静・温める（急性期以外）', whenToGo: '腕・手の脱力・頻繁なしびれがある場合は整形外科・神経内科へ' } },
      { name: '深部静脈血栓症', desc: '腕が急に腫れて赤くなり、強い痛みが出る場合は要注意。', tag: 'urgent', detail: { cause: '静脈内の血栓形成。長期安静・中心静脈カテーテル後に多い', selfCare: '自己処置は不可。即119番または救急受診', whenToGo: '腕が急に腫れて発赤・発熱・強い痛みがある場合は即救急' } },
    ]
  },
  'arm-right': {
    name: '右腕',
    icon: '🦾',
    desc: '腕の痛みやしびれは筋肉・神経・血管のトラブルが考えられます。',
    preview: ['腕のしびれ', '肘の痛み', '腕の疲れ'],
    symptoms: [
      { name: '手根管症候群', desc: '手首から指（特に親指・人差し指）にかけてのしびれや痛み。PC作業が多い人に多い。', tag: 'common', detail: { cause: '手首の正中神経が圧迫される。妊娠・更年期・PC作業過多で増加', selfCare: '手首の安静・サポーター装着・手首のストレッチ・夜間の手首の固定', whenToGo: 'しびれが強くなる場合・親指の力が弱くなった場合は整形外科へ' } },
      { name: 'テニス肘・ゴルフ肘', desc: '肘の外側が痛む。重いものを持つとき悪化。', tag: 'common', detail: { cause: '肘の腱の繰り返しの過負荷による微細損傷の蓄積', selfCare: '安静・アイシング・サポーター・ストレッチ', whenToGo: '2ヶ月以上改善しない場合' } },
      { name: '筋肉痛・筋膜炎', desc: '運動後や過労による腕全体の痛みや張り感。', tag: 'mild', detail: { cause: '運動による筋線維の微細損傷（筋肉痛）または筋膜の炎症', selfCare: '安静・温める・軽いストレッチ・十分な睡眠', whenToGo: '1週間以上改善しない場合・腫れや内出血が見られる場合' } },
      { name: '頸椎ヘルニアの放散痛', desc: '首から腕にかけて電気が走るような痛みやしびれ。', tag: 'common', detail: { cause: '頸椎の椎間板が飛び出して神経根を圧迫する', selfCare: '姿勢改善・首の安静・温める', whenToGo: '腕・手の脱力・頻繁なしびれがある場合' } },
    ]
  },
  'hand-left': {
    name: '左手・手首',
    icon: '🤚',
    desc: '手や手首の痛みは関節炎や腱の炎症が多いですが、神経のトラブルも考えられます。',
    preview: ['手首の痛み', '指のしびれ', '関節痛'],
    symptoms: [
      { name: '手根管症候群', desc: '夜間や明け方の手指のしびれ・痛み。PC・スマホの使いすぎで増加中。', tag: 'common', detail: { cause: '手首の正中神経の圧迫。スマホ・PC作業・妊娠・更年期が要因', selfCare: '手首の安静・サポーター・ストレッチ・夜間の手首の固定', whenToGo: 'しびれが強い・親指の力が弱くなった場合は整形外科へ' } },
      { name: 'ドケルバン病（腱鞘炎）', desc: '親指の付け根から手首にかけての痛み。子育て中・PC作業が多い人に多い。', tag: 'common', detail: { cause: '親指の腱と腱鞘（腱を包む組織）の炎症。育児・PC作業の繰り返し動作', selfCare: '親指の安静・サポーター装着・アイシング・消炎鎮痛薬', whenToGo: '1ヶ月以上改善しない・日常生活に支障が出る場合は整形外科へ' } },
      { name: '関節リウマチ', desc: '複数の関節が腫れて痛む。朝の手のこわばりが特徴。', tag: 'common', detail: { cause: '免疫系が自分の関節を攻撃する自己免疫疾患。女性に多い', selfCare: '関節を冷やさない・無理に動かさない。早めの受診が重要', whenToGo: '朝のこわばりが1時間以上続く・複数の関節が腫れる場合は内科・リウマチ科へ' } },
      { name: '突き指・捻挫', desc: '外傷による関節の痛みと腫れ。', tag: 'mild', detail: { cause: '外力による靭帯・腱の損傷', selfCare: 'RICE処置（安静・冷却・圧迫・挙上）を行う', whenToGo: '激しい腫れ・変形・曲がらない・骨折の疑いがある場合は整形外科へ' } },
    ]
  },
  'hand-right': {
    name: '右手・手首',
    icon: '✋',
    desc: '手や手首の痛みは関節炎や腱の炎症が多いですが、神経のトラブルも考えられます。',
    preview: ['手首の痛み', '指のしびれ', '関節痛'],
    symptoms: [
      { name: '手根管症候群', desc: '夜間や明け方の手指のしびれ・痛み。PC・スマホの使いすぎで増加中。', tag: 'common', detail: { cause: '手首の正中神経の圧迫。スマホ・PC作業・妊娠・更年期が要因', selfCare: '手首の安静・サポーター・ストレッチ・夜間の手首の固定', whenToGo: 'しびれが強い・親指の力が弱くなった場合は整形外科へ' } },
      { name: 'ドケルバン病（腱鞘炎）', desc: '親指の付け根から手首にかけての痛み。子育て中・PC作業が多い人に多い。', tag: 'common', detail: { cause: '親指の腱と腱鞘の炎症。育児・PC作業の繰り返し動作', selfCare: '親指の安静・サポーター装着・アイシング・消炎鎮痛薬', whenToGo: '1ヶ月以上改善しない・日常生活に支障が出る場合' } },
      { name: '関節リウマチ', desc: '複数の関節が腫れて痛む。朝の手のこわばりが特徴。', tag: 'common', detail: { cause: '免疫系が自分の関節を攻撃する自己免疫疾患。女性に多い', selfCare: '関節を冷やさない・無理に動かさない。早めの受診が重要', whenToGo: '朝のこわばりが1時間以上続く・複数の関節が腫れる場合はリウマチ科へ' } },
      { name: '突き指・捻挫', desc: '外傷による関節の痛みと腫れ。', tag: 'mild', detail: { cause: '外力による靭帯・腱の損傷', selfCare: 'RICE処置（安静・冷却・圧迫・挙上）を行う', whenToGo: '激しい腫れ・変形・曲がらない・骨折の疑いがある場合' } },
    ]
  },
  abdomen: {
    name: 'お腹',
    icon: '🔴',
    desc: 'お腹の痛みは消化器系のトラブルが多いですが、場所によって原因が異なります。',
    preview: ['腹痛', '吐き気', '下痢', '胃痛'],
    symptoms: [
      { name: '急性胃腸炎', desc: '嘔吐・下痢・腹痛がセットで起こる。食中毒・ウイルスが原因のことが多い。', tag: 'common', detail: { cause: 'ノロウイルス・ロタウイルス・細菌性食中毒（カンピロバクター等）', selfCare: '水分補給（経口補水液・スポーツドリンク）・安静・消化の良い食事', whenToGo: '血便・激しい腹痛・脱水症状・高熱・症状が3日以上続く場合' } },
      { name: '胃潰瘍・十二指腸潰瘍', desc: 'みぞおちのズキズキする痛み。空腹時や食後に悪化。', tag: 'common', detail: { cause: 'ピロリ菌感染・NSAIDs（鎮痛剤）の長期服用・ストレスによる胃粘膜の損傷', selfCare: '刺激物・アルコール・タバコを避ける。規則正しい食事', whenToGo: '黒い便（タール便）・吐血・急激な腹痛は即救急。改善しない場合は内視鏡検査を' } },
      { name: '過敏性腸症候群（IBS）', desc: 'ストレスによる慢性的な腹痛・下痢・便秘の繰り返し。若い人に多い。', tag: 'common', detail: { cause: '腸と脳の連携の乱れ（腸脳相関）。ストレス・不規則な食生活・睡眠不足が悪化要因', selfCare: 'ストレス管理・規則正しい食事・食物繊維の調整・腸活（発酵食品）', whenToGo: '血便・体重減少・夜中の腹痛がある場合は大腸がんの除外診断が必要' } },
      { name: '虫垂炎（盲腸）', desc: '最初はへそ周りの痛みが、右下腹部に移動して激しくなる。至急受診を。', tag: 'urgent', detail: { cause: '虫垂の閉塞による細菌の繁殖・炎症。放置すると穿孔（穴が開く）する危険性', selfCare: '自己処置は不可。痛み止めで誤魔化さず即受診', whenToGo: '右下腹部の痛み・発熱・嘔吐が重なる場合は即救急へ' } },
      { name: '腸閉塞', desc: '激しい腹痛・嘔吐・腹部膨満感。腸が詰まっている状態。至急救急へ。', tag: 'urgent', detail: { cause: '術後癒着・腫瘍・ヘルニアによる腸の閉塞。放置すると腸壊死のリスク', selfCare: '自己処置は不可。即119番', whenToGo: '腹部が板のように硬くなる・嘔吐が止まらない・排ガスがない場合は即救急' } },
    ]
  },
  'lower-back': {
    name: '腰・股関節',
    icon: '🦴',
    desc: '腰の痛みは日本人に最も多い症状のひとつ。筋肉・骨・神経・内臓のトラブルが考えられます。',
    preview: ['腰痛', '股関節の痛み', '坐骨神経痛'],
    symptoms: [
      { name: '筋筋膜性腰痛（ぎっくり腰含む）', desc: '腰の筋肉や筋膜の損傷・炎症。突然起こる急性痛と慢性痛がある。', tag: 'common', detail: { cause: '急な動作・慢性的な姿勢不良・筋力不足による腰の筋肉・筋膜の損傷', selfCare: '急性期は安静と冷却（2日程度）。慢性期は温めてストレッチ・体幹トレーニング', whenToGo: '足のしびれを伴う・2週間以上改善しない・排尿障害がある場合' } },
      { name: '腰椎椎間板ヘルニア', desc: '腰から足にかけてしびれ・電気が走るような痛み（坐骨神経痛）。', tag: 'common', detail: { cause: '腰の椎間板の髄核が飛び出し、神経を圧迫する', selfCare: '安静・腰を温める（急性期以外）・腰痛体操・姿勢改善', whenToGo: '足のしびれ・脱力・排尿障害がある場合は早急に整形外科へ' } },
      { name: '腎盂腎炎・尿路結石', desc: '腰の片側が激しく痛む。発熱・排尿痛を伴う場合は腎臓のトラブルの可能性。', tag: 'urgent', detail: { cause: '細菌感染（腎盂腎炎）またはカルシウム等の結晶による閉塞（尿路結石）', selfCare: '水分を多めに摂取。腰痛と思い込まず症状をよく確認', whenToGo: '高熱・血尿・吐き気を伴う激しい腰痛は内科・泌尿器科へ' } },
      { name: '変形性股関節症', desc: '股関節の奥が痛み、歩行時に悪化。足の付け根に違和感がある。', tag: 'common', detail: { cause: '股関節の軟骨の摩耗による変形。加齢・肥満・先天性股関節脱臼が要因', selfCare: '体重管理・水中ウォーキング・股関節ストレッチ', whenToGo: '歩行が困難になる・安静時にも痛む場合は整形外科へ' } },
    ]
  },
  'thigh-left': {
    name: '左太もも',
    icon: '🦵',
    desc: '太ももの痛みは筋肉・神経・血管のトラブルが考えられます。',
    preview: ['太ももの痛み', '筋肉痛', 'しびれ'],
    symptoms: [
      { name: '筋肉痛・肉離れ', desc: '運動後の筋肉のダメージ。突然の鋭い痛みは肉離れの可能性。', tag: 'mild', detail: { cause: '運動による筋線維の微細損傷（筋肉痛）または急激な収縮による断裂（肉離れ）', selfCare: 'RICE処置・安静・温める（慢性期のみ）・十分な回復期間', whenToGo: '激しい痛みで歩けない・内出血が広がる場合は整形外科へ' } },
      { name: '坐骨神経痛', desc: 'お尻から太ももの裏にかけて電気が走るような痛みやしびれ。', tag: 'common', detail: { cause: '椎間板ヘルニア・梨状筋症候群による坐骨神経の圧迫', selfCare: '姿勢改善・ストレッチ・温める・長時間同じ姿勢を避ける', whenToGo: '排尿障害・足全体の脱力・改善しない場合は整形外科・神経内科へ' } },
      { name: '深部静脈血栓症（エコノミークラス症候群）', desc: '太ももや足が急に腫れて熱を持ち、痛む。肺塞栓症に進む危険性あり。至急救急へ。', tag: 'urgent', detail: { cause: '長時間の不動（飛行機・手術後）・脱水・血液凝固異常による静脈内血栓', selfCare: '自己処置は不可。即119番', whenToGo: '片足だけ急に腫れて熱・痛みがある場合は即救急（肺塞栓症を防ぐため）' } },
    ]
  },
  'thigh-right': {
    name: '右太もも',
    icon: '🦵',
    desc: '太ももの痛みは筋肉・神経・血管のトラブルが考えられます。',
    preview: ['太ももの痛み', '筋肉痛', 'しびれ'],
    symptoms: [
      { name: '筋肉痛・肉離れ', desc: '運動後の筋肉のダメージ。突然の鋭い痛みは肉離れの可能性。', tag: 'mild', detail: { cause: '運動による筋線維の微細損傷（筋肉痛）または急激な収縮による断裂（肉離れ）', selfCare: 'RICE処置・安静・温める（慢性期のみ）・十分な回復期間', whenToGo: '激しい痛みで歩けない・内出血が広がる場合は整形外科へ' } },
      { name: '坐骨神経痛', desc: 'お尻から太ももの裏にかけて電気が走るような痛みやしびれ。', tag: 'common', detail: { cause: '椎間板ヘルニア・梨状筋症候群による坐骨神経の圧迫', selfCare: '姿勢改善・ストレッチ・温める・長時間同じ姿勢を避ける', whenToGo: '排尿障害・足全体の脱力・改善しない場合' } },
      { name: '深部静脈血栓症', desc: '太ももや足が急に腫れて熱を持ち、痛む。至急救急へ。', tag: 'urgent', detail: { cause: '静脈内の血栓形成。長時間の不動・脱水が主な原因', selfCare: '自己処置は不可。即119番', whenToGo: '片足だけ急に腫れて発赤・痛みがある場合は即救急' } },
    ]
  },
  'knee-left': {
    name: '左ひざ',
    icon: '🦵',
    desc: 'ひざの痛みはスポーツ障害や変形性関節症が多いです。',
    preview: ['ひざの痛み', '腫れ', '曲げると痛い'],
    symptoms: [
      { name: '変形性膝関節症', desc: '階段の上り下りで痛む。中高年に多いが、肥満・スポーツ過多でも発症。', tag: 'common', detail: { cause: '膝の軟骨の摩耗による骨同士の摩擦。加齢・肥満・O脚が主な要因', selfCare: '体重管理・大腿四頭筋（太もも前面）の筋トレ・ウォーキング・サポーター', whenToGo: '膝に水が溜まる・歩行が困難になる場合は整形外科へ' } },
      { name: '前十字靭帯損傷', desc: 'スポーツ中の急停止・着地で「ブチッ」という感覚とともに激痛。', tag: 'urgent', detail: { cause: 'スポーツ中の急停止・方向転換・着地の衝撃による靭帯断裂', selfCare: 'RICE処置後すぐ整形外科へ。自己判断で動かさない', whenToGo: '即受診（多くの場合手術が必要。放置すると膝の不安定感が残る）' } },
      { name: '半月板損傷', desc: 'ひざを曲げ伸ばしするときに引っかかる感じや痛み。', tag: 'common', detail: { cause: 'スポーツ外傷または加齢による変性。ひねりの動作で起きやすい', selfCare: '安静・アイシング・圧迫。無理に動かさない', whenToGo: '膝が曲げ伸ばしできなくなる（ロッキング）場合は即整形外科へ' } },
      { name: 'ジャンパー膝（膝蓋腱炎）', desc: 'ジャンプやランニングをするスポーツ選手のひざ下の痛み。', tag: 'common', detail: { cause: 'ジャンプ・ランニングの繰り返しによる膝蓋腱の炎症', selfCare: 'アイシング・安静・テーピング・大腿四頭筋のストレッチ', whenToGo: '2ヶ月以上改善しない・安静時にも痛む場合は整形外科へ' } },
    ]
  },
  'knee-right': {
    name: '右ひざ',
    icon: '🦵',
    desc: 'ひざの痛みはスポーツ障害や変形性関節症が多いです。',
    preview: ['ひざの痛み', '腫れ', '曲げると痛い'],
    symptoms: [
      { name: '変形性膝関節症', desc: '階段の上り下りで痛む。中高年に多いが、肥満・スポーツ過多でも発症。', tag: 'common', detail: { cause: '膝の軟骨の摩耗による骨同士の摩擦。加齢・肥満・O脚が主な要因', selfCare: '体重管理・大腿四頭筋の筋トレ・ウォーキング・サポーター', whenToGo: '膝に水が溜まる・歩行が困難になる場合は整形外科へ' } },
      { name: '前十字靭帯損傷', desc: 'スポーツ中の急停止・着地で「ブチッ」という感覚とともに激痛。', tag: 'urgent', detail: { cause: 'スポーツ中の急停止・方向転換・着地の衝撃による靭帯断裂', selfCare: 'RICE処置後すぐ整形外科へ', whenToGo: '即受診（多くの場合手術が必要）' } },
      { name: '半月板損傷', desc: 'ひざを曲げ伸ばしするときに引っかかる感じや痛み。', tag: 'common', detail: { cause: 'スポーツ外傷または加齢による変性', selfCare: '安静・アイシング・圧迫', whenToGo: 'ロッキングが起きたら即整形外科へ' } },
      { name: 'ランナー膝（腸脛靭帯炎）', desc: 'ランニング中・後に外側が痛む。', tag: 'common', detail: { cause: 'ランニングの繰り返しによる腸脛靭帯と大腿骨の摩擦・炎症', selfCare: 'アイシング・安静・腸脛靭帯のストレッチ・フォーム改善', whenToGo: '2ヶ月以上改善しない場合' } },
    ]
  },
  'shin-left': {
    name: '左すね・ふくらはぎ',
    icon: '🦵',
    desc: 'すね・ふくらはぎの痛みは筋肉や血管のトラブルが多いです。',
    preview: ['こむら返り', 'すねの痛み', 'むくみ'],
    symptoms: [
      { name: 'こむら返り（筋痙攣）', desc: '夜間や運動中に突然起こる激しい筋肉のけいれん。', tag: 'mild', detail: { cause: '筋肉疲労・脱水・ミネラル（マグネシウム・カリウム）不足・冷え', selfCare: 'ゆっくりふくらはぎを伸ばす・水分補給・マグネシウムを多く含む食品', whenToGo: '頻繁に繰り返す・脱力感を伴う場合（神経・血管疾患の可能性）' } },
      { name: 'シンスプリント', desc: 'ランニングや運動で繰り返されるすねの痛み。走ると悪化する。', tag: 'common', detail: { cause: 'ランニングや跳躍の繰り返しによるすね内側の骨膜の炎症', selfCare: '運動量の減少・アイシング・テーピング・クッション性の高い靴', whenToGo: '特定の一点だけ激しく痛む場合（疲労骨折の疑い）は整形外科でX線撮影を' } },
      { name: '深部静脈血栓症', desc: '足が急に腫れて熱を持ち、ズキズキ痛む。至急救急へ。', tag: 'urgent', detail: { cause: '静脈内の血栓形成。長時間の不動・脱水が主な原因', selfCare: '自己処置は不可。即119番', whenToGo: '片足だけ急に腫れて発赤・痛みがある場合は即救急' } },
      { name: '疲労骨折', desc: '繰り返しの衝撃でできた骨のひび割れ。運動すると痛む。', tag: 'common', detail: { cause: '急激に増やしたトレーニング量による骨への繰り返しストレス', selfCare: '運動休止・受診。カルシウム・ビタミンD補給', whenToGo: '押すと特定の場所が激しく痛む場合は早めに整形外科でMRI・骨シンチ検査を' } },
    ]
  },
  'shin-right': {
    name: '右すね・ふくらはぎ',
    icon: '🦵',
    desc: 'すね・ふくらはぎの痛みは筋肉や血管のトラブルが多いです。',
    preview: ['こむら返り', 'すねの痛み', 'むくみ'],
    symptoms: [
      { name: 'こむら返り（筋痙攣）', desc: '夜間や運動中に突然起こる激しい筋肉のけいれん。', tag: 'mild', detail: { cause: '筋肉疲労・脱水・ミネラル不足・冷え', selfCare: 'ゆっくりふくらはぎを伸ばす・水分補給・マグネシウム補給', whenToGo: '頻繁に繰り返す・脱力感を伴う場合' } },
      { name: 'シンスプリント', desc: 'ランニングや運動で繰り返されるすねの痛み。走ると悪化する。', tag: 'common', detail: { cause: 'ランニングや跳躍の繰り返しによる骨膜炎症', selfCare: '運動量の減少・アイシング・テーピング', whenToGo: '特定の一点だけ激しく痛む場合は整形外科へ' } },
      { name: '深部静脈血栓症', desc: '足が急に腫れて熱を持ち、ズキズキ痛む。至急救急へ。', tag: 'urgent', detail: { cause: '静脈内の血栓形成。長時間の不動・脱水が原因', selfCare: '自己処置は不可。即119番', whenToGo: '即救急' } },
      { name: '疲労骨折', desc: '繰り返しの衝撃でできた骨のひび割れ。運動すると痛む。', tag: 'common', detail: { cause: '急激に増やしたトレーニング量による骨へのストレス', selfCare: '運動休止・受診', whenToGo: '押すと特定の場所が激しく痛む場合は整形外科へ' } },
    ]
  },
  'foot-left': {
    name: '左足首・足',
    icon: '🦶',
    desc: '足や足首の痛みは捻挫・腱の炎症・神経のトラブルが多いです。',
    preview: ['足首の痛み', '足裏の痛み', '捻挫'],
    symptoms: [
      { name: '足首捻挫', desc: '外側の靭帯が損傷。腫れ・内出血を伴う。', tag: 'common', detail: { cause: '足首の外側靭帯の損傷。不整地・スポーツ中の着地ミスで多い', selfCare: 'RICE処置（安静・冷却・圧迫・挙上）を48時間以内に実施', whenToGo: '激しい腫れ・変形・体重をかけると非常に痛む場合（骨折の疑い）は整形外科へ' } },
      { name: '足底筋膜炎', desc: '朝起き上がって最初の一歩が痛い。踵〜土踏まずの痛み。', tag: 'common', detail: { cause: '足底の腱膜への繰り返すストレス。硬い床・長時間立ち仕事・肥満・扁平足', selfCare: '足底ストレッチ・クッションインソール・アイシング・体重管理', whenToGo: '6週間以上改善しない場合は整形外科・リハビリへ' } },
      { name: 'アキレス腱炎', desc: 'かかとの上の腱が痛む。ランニングや急な運動開始で多い。', tag: 'common', detail: { cause: 'ランニング・急な運動増加による腱への過負荷と炎症', selfCare: 'アイシング・踵上げ運動（徐々に）・安静・ストレッチ', whenToGo: '突然の激しい痛みでアキレス腱の断裂が疑われる場合は即整形外科へ' } },
      { name: '外反母趾', desc: '親指の付け根が内側に曲がり、痛みや炎症が起きる。', tag: 'common', detail: { cause: '合わない靴（先が細い・ヒールが高い）・遺伝的要因・筋力低下', selfCare: '幅広の靴に変える・足指ストレッチ・夜間装具・インソール', whenToGo: '歩行困難・痛みが強い場合は整形外科へ（手術が有効なケースも）' } },
    ]
  },
  'foot-right': {
    name: '右足首・足',
    icon: '🦶',
    desc: '足や足首の痛みは捻挫・腱の炎症・神経のトラブルが多いです。',
    preview: ['足首の痛み', '足裏の痛み', '捻挫'],
    symptoms: [
      { name: '足首捻挫', desc: '外側の靭帯が損傷。腫れ・内出血を伴う。', tag: 'common', detail: { cause: '足首の外側靭帯の損傷。不整地・スポーツ中の着地ミスで多い', selfCare: 'RICE処置（安静・冷却・圧迫・挙上）を48時間以内に実施', whenToGo: '激しい腫れ・変形がある場合（骨折の疑い）は整形外科へ' } },
      { name: '足底筋膜炎', desc: '朝起き上がって最初の一歩が痛い。踵〜土踏まずの痛み。', tag: 'common', detail: { cause: '足底の腱膜への繰り返すストレス。硬い床・長時間立ち仕事・肥満', selfCare: '足底ストレッチ・クッションインソール・アイシング', whenToGo: '6週間以上改善しない場合' } },
      { name: 'アキレス腱炎', desc: 'かかとの上の腱が痛む。ランニングや急な運動開始で多い。', tag: 'common', detail: { cause: 'ランニング・急な運動増加による腱への過負荷と炎症', selfCare: 'アイシング・安静・ストレッチ・踵上げ運動', whenToGo: '突然の激しい痛みでアキレス腱断裂が疑われる場合は即整形外科へ' } },
      { name: '痛風', desc: '突然の激しい足の親指の付け根の痛み。男性に多い。', tag: 'common', detail: { cause: '血液中の尿酸値が高くなり、関節に尿酸結晶が析出して炎症が起きる', selfCare: 'アイシング（温めない）・水分を多くとる・アルコール・プリン体の多い食品を避ける', whenToGo: '初めての発作または痛みが激しい場合は内科・リウマチ科で尿酸値検査を' } },
    ]
  },
};

const tagLabel = { urgent: '要注意', mild: '軽症', common: 'よくある' };

// ===== 年齢別データ =====
const ageData = {
  all: {
    label: '全年齢',
    recommend: [
      { part: 'head', label: '頭痛', count: '約4,200万人が悩む' },
      { part: 'lower-back', label: '腰痛', count: '約3,000万人が悩む' },
      { part: 'abdomen', label: '腹痛', count: '最多の受診症状' },
      { part: 'chest', label: '胸の痛み', count: '緊急性に注意' },
    ]
  },
  teen: {
    label: '10代',
    recommend: [
      { part: 'head', label: '頭痛・偏頭痛', count: '10代に急増中' },
      { part: 'knee-right', label: '膝の痛み', count: 'スポーツ障害' },
      { part: 'abdomen', label: '腹痛・IBS', count: 'ストレス性が多い' },
      { part: 'neck', label: 'スマホ首', count: 'Z世代の新症状' },
    ]
  },
  twenty: {
    label: '20代',
    recommend: [
      { part: 'lower-back', label: '腰痛', count: 'デスクワーク増加' },
      { part: 'neck', label: '肩こり・首こり', count: 'PC作業が原因' },
      { part: 'chest', label: '動悸・パニック', count: '過労・ストレス' },
      { part: 'abdomen', label: '過敏性腸症候群', count: '20代女性に多い' },
    ]
  },
  thirty: {
    label: '30代',
    recommend: [
      { part: 'lower-back', label: '腰椎ヘルニア', count: '30代から急増' },
      { part: 'hand-right', label: '腱鞘炎', count: 'PC・育児が原因' },
      { part: 'shoulder-right', label: '四十肩の前兆', count: '30代後半から' },
      { part: 'abdomen', label: '胃潰瘍', count: 'ストレス・過労' },
    ]
  },
  forty: {
    label: '40代+',
    recommend: [
      { part: 'knee-right', label: '変形性膝関節症', count: '40代以上に多い' },
      { part: 'shoulder-right', label: '四十肩・五十肩', count: '40〜60代がピーク' },
      { part: 'lower-back', label: '脊柱管狭窄症', count: '50代以降に多い' },
      { part: 'chest', label: '狭心症', count: '40代から注意を' },
    ]
  },
};

// ===== デフォルトランキングデータ（初回のみ） =====
const defaultRanking = {
  'head': 3820,
  'lower-back': 3105,
  'abdomen': 2890,
  'chest': 2340,
  'neck': 1980,
  'knee-right': 1640,
  'shoulder-right': 1420,
  'arm-right': 980,
};

// ===== UI 処理 =====
const tooltip = document.getElementById('tooltip');
const tooltipTitle = document.getElementById('tooltipTitle');
const tooltipList = document.getElementById('tooltipList');
const tooltipBtn = document.getElementById('tooltipBtn');
const detailPanel = document.getElementById('detailPanel');
const panelIcon = document.getElementById('panelIcon');
const panelTitle = document.getElementById('panelTitle');
const panelDesc = document.getElementById('panelDesc');
const symptomsGrid = document.getElementById('symptomsGrid');
const panelClose = document.getElementById('panelClose');

let currentPart = null;
let currentAge = 'all';

// ===== ランキング（localStorage） =====
function getRanking() {
  const stored = localStorage.getItem('symptom_ranking');
  return stored ? JSON.parse(stored) : { ...defaultRanking };
}

function incrementRanking(partId) {
  const ranking = getRanking();
  ranking[partId] = (ranking[partId] || 0) + 1;
  localStorage.setItem('symptom_ranking', JSON.stringify(ranking));
  renderRanking();
}

function renderRanking() {
  const ranking = getRanking();
  const sorted = Object.entries(ranking)
    .filter(([id]) => bodyData[id])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const max = sorted[0]?.[1] || 1;
  const medals = ['rank-1', 'rank-2', 'rank-3', 'rank-other', 'rank-other'];
  const medalText = ['1', '2', '3', '4', '5'];

  document.getElementById('rankingList').innerHTML = sorted.map(([id, count], i) => {
    const data = bodyData[id];
    const pct = Math.round((count / max) * 100);
    return `
      <div class="ranking-item" data-part="${id}">
        <div class="rank-num ${medals[i]}">${medalText[i]}</div>
        <div class="rank-icon">${data.icon}</div>
        <div class="rank-info">
          <div class="rank-name">${data.name}</div>
          <div class="rank-sub">${data.preview[0]}・${data.preview[1]}</div>
        </div>
        <div class="rank-bar-wrap">
          <div class="rank-count">${count.toLocaleString()}</div>
          <div class="rank-bar"><div class="rank-bar-fill" style="width:${pct}%"></div></div>
        </div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.ranking-item').forEach(item => {
    item.addEventListener('click', () => {
      const data = bodyData[item.dataset.part];
      if (data) showDetailPanel(item.dataset.part, data);
    });
  });
}

// ===== 年齢別おすすめ =====
function renderAgeRecommend(age) {
  const data = ageData[age];
  document.getElementById('ageRecommendTitle').textContent = `${data.label}に多い症状`;
  document.getElementById('recommendChips').innerHTML = data.recommend.map(r => `
    <div class="recommend-chip" data-part="${r.part}">
      <span class="chip-icon">${bodyData[r.part]?.icon || '🔴'}</span>
      <span class="chip-label">${r.label}</span>
      <span class="chip-count">${r.count}</span>
    </div>
  `).join('');

  document.querySelectorAll('.recommend-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const data = bodyData[chip.dataset.part];
      if (data) showDetailPanel(chip.dataset.part, data);
    });
  });
}

// 年齢タブ
document.querySelectorAll('.age-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.age-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentAge = tab.dataset.age;
    renderAgeRecommend(currentAge);
  });
});

// 初期描画
renderRanking();
renderAgeRecommend('all');

// 身体パーツのイベント
document.querySelectorAll('.body-part').forEach(part => {
  const partId = part.dataset.part;
  const data = bodyData[partId];
  if (!data) return;

  part.addEventListener('mouseenter', (e) => {
    showTooltip(e, data, part);
  });

  part.addEventListener('mousemove', (e) => {
    positionTooltip(e);
  });

  part.addEventListener('mouseleave', () => {
    hideTooltip();
  });

  part.addEventListener('click', () => {
    showDetailPanel(partId, data);
  });

  // タッチ対応
  part.addEventListener('touchstart', (e) => {
    e.preventDefault();
    showDetailPanel(partId, data);
  }, { passive: false });
});

function showTooltip(e, data, partEl) {
  tooltipTitle.textContent = data.name;
  tooltipList.innerHTML = data.preview.map(p => `• ${p}`).join('<br>');
  tooltipBtn.onclick = () => {
    hideTooltip();
    showDetailPanel(partEl.dataset.part, data);
  };
  tooltip.classList.add('visible');
  positionTooltip(e);
}

function positionTooltip(e) {
  const wrapper = document.querySelector('.body-map-wrapper');
  const rect = wrapper.getBoundingClientRect();
  const svgRect = document.querySelector('.body-svg').getBoundingClientRect();

  let x = e.clientX - rect.left + 15;
  let y = e.clientY - rect.top - 10;

  // 右端補正
  if (x + 210 > rect.width) x = e.clientX - rect.left - 220;
  if (y < 0) y = 0;

  tooltip.style.left = x + 'px';
  tooltip.style.top = y + 'px';
}

function hideTooltip() {
  tooltip.classList.remove('visible');
}

function showDetailPanel(partId, data) {
  incrementRanking(partId);
  // アクティブ状態
  document.querySelectorAll('.body-part').forEach(p => p.classList.remove('active'));
  document.querySelector(`[data-part="${partId}"]`)?.classList.add('active');

  panelIcon.textContent = data.icon;
  panelTitle.textContent = data.name;
  panelDesc.textContent = data.desc;

  const urgent = data.symptoms.filter(s => s.tag === 'urgent');
  const normal = data.symptoms.filter(s => s.tag !== 'urgent');

  function renderCard(s, i) {
    return `
    <div class="symptom-card ${s.tag === 'urgent' ? 'warning' : s.tag === 'mild' ? 'mild' : ''}">
      <div class="symptom-card-header">
        <span class="symptom-num">${i + 1}</span>
        <div class="symptom-name">${s.name}</div>
        <span class="symptom-tag tag-${s.tag}">${tagLabel[s.tag]}</span>
      </div>
      <div class="symptom-desc">${s.desc}</div>
      ${s.detail ? `<button class="detail-toggle-btn">くわしく ▼</button>
      <div class="symptom-detail-expand">
        <div class="detail-row"><span class="detail-label">🔍 原因</span><span class="detail-val">${s.detail.cause}</span></div>
        <div class="detail-row"><span class="detail-label">🏠 セルフケア</span><span class="detail-val">${s.detail.selfCare}</span></div>
        <div class="detail-row"><span class="detail-label">🏥 病院の目安</span><span class="detail-val">${s.detail.whenToGo}</span></div>
      </div>` : ''}
    </div>`;
  }

  let html = '';
  if (urgent.length) {
    html += `<div class="symptom-section-label urgent-label">⚠️ すぐに受診が必要な症状</div>`;
    html += urgent.map((s, i) => renderCard(s, i)).join('');
  }
  if (normal.length) {
    html += `<div class="symptom-section-label">よくある原因</div>`;
    html += normal.map((s, i) => renderCard(s, i)).join('');
  }
  symptomsGrid.innerHTML = html;

  symptomsGrid.querySelectorAll('.detail-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const expand = btn.nextElementSibling;
      const isOpen = expand.classList.toggle('open');
      btn.textContent = isOpen ? 'とじる ▲' : 'くわしく ▼';
    });
  });

  detailPanel.classList.add('visible');
  currentPart = partId;
}

panelClose.addEventListener('click', () => {
  detailPanel.classList.remove('visible');
  document.querySelectorAll('.body-part').forEach(p => p.classList.remove('active'));
  currentPart = null;
});

// 検索
document.getElementById('searchBtn').addEventListener('click', handleSearch);
document.getElementById('searchInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleSearch();
});

function handleSearch() {
  const query = document.getElementById('searchInput').value.trim();
  if (!query) return;

  // キーワードマッチ
  const keywords = {
    '頭': 'head', '頭痛': 'head', 'めまい': 'head', '発熱': 'head', '熱': 'head',
    '首': 'neck', '喉': 'neck', 'のど': 'neck', 'リンパ': 'neck',
    '胸': 'chest', '動悸': 'chest', '息': 'chest', '心臓': 'chest',
    'お腹': 'abdomen', '腹': 'abdomen', '胃': 'abdomen', '吐き気': 'abdomen', '下痢': 'abdomen',
    '腰': 'lower-back', '股関節': 'lower-back', '坐骨': 'lower-back',
    '肩': 'shoulder-right', '肩こり': 'shoulder-right',
    '腕': 'arm-right', 'ひじ': 'arm-right', '肘': 'arm-right',
    '手': 'hand-right', '手首': 'hand-right', '指': 'hand-right',
    '太もも': 'thigh-right', 'もも': 'thigh-right',
    'ひざ': 'knee-right', '膝': 'knee-right',
    'すね': 'shin-right', 'ふくらはぎ': 'shin-right', 'こむら': 'shin-right',
    '足': 'foot-right', '足首': 'foot-right', 'かかと': 'foot-right',
  };

  let matched = null;
  for (const [kw, partId] of Object.entries(keywords)) {
    if (query.includes(kw)) {
      matched = partId;
      break;
    }
  }

  if (matched && bodyData[matched]) {
    showDetailPanel(matched, bodyData[matched]);
    document.getElementById('searchInput').value = '';
  } else {
    // マッチしない場合はランダムでヒントを出す
    alert('もう少し具体的に入力してみてください。\n例：「右の下腹が痛い」「頭がズキズキする」');
  }
}
