import React, {useState, useEffect} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import './Theme.css';

const ThemeCustomHook = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  const themeChange= ()=>{
    if(theme=='dark'){
      setTheme('light')
    }
    
    if(theme =='light'){
      setTheme('dark')
    }
  }

  return (
    <div className={`theme ${theme}`}>
      <input type="checkbox" onClick={themeChange} checked={theme==='dark'? true : false} />

      <p>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        impedit cupiditate id? Eius veniam quibusdam soluta harum voluptatibus
        in, nostrum voluptas iste expedita? Praesentium minima voluptatem ad
        numquam illum illo? Impedit soluta possimus quaerat numquam nam totam
        cumque aperiam doloremque asperiores dolores. Tenetur ipsa ipsum iste
        quae! Accusamus consequatur animi molestias non, repellat quidem maiores
        ad, quisquam architecto, debitis magnam? Inventore optio ab harum animi
        distinctio praesentium ipsam dolores aut. Non excepturi repellendus
        maiores architecto at nostrum sed culpa error nemo, totam tenetur neque
        voluptas voluptatem consectetur. Ab, eligendi eveniet? Veniam aspernatur
        laborum nulla! Recusandae distinctio officiis, nostrum mollitia ipsam
        earum ab totam repellat atque beatae laboriosam nam maxime labore quasi
        veritatis. Laborum ullam consectetur delectus eligendi, repudiandae esse
        debitis! Quidem odit accusantium ratione quo sapiente consequuntur magni
        exercitationem. Et illo voluptatem eius consectetur facilis temporibus
        nisi magni distinctio incidunt fugiat aliquid, inventore est, rem omnis,
        numquam impedit. Aut, numquam! Enim voluptas illum fuga ad est unde,
        natus debitis quam saepe nemo illo numquam quisquam tenetur molestiae
        quia possimus iste fugiat accusamus. Aliquid, id a nesciunt omnis
        nostrum consequatur sunt. Nisi vel tempora iste suscipit eos facilis?
        Quidem iste a consectetur eligendi nobis alias adipisci, cumque officiis
        quisquam? Nostrum tenetur voluptatem eum molestias, placeat doloremque
        asperiores nulla consequatur ut distinctio? Blanditiis libero eius quia
        incidunt fuga corporis nisi atque magnam, tenetur exercitationem cumque
        a architecto qui dolore. Necessitatibus laboriosam cupiditate,
        perferendis quaerat magni labore autem, similique sed sequi voluptate
        reiciendis? Iste, nulla cupiditate laudantium voluptas, officia esse
        nisi optio odio possimus reprehenderit praesentium molestiae suscipit
        sed et, nihil accusantium iure provident ad repellendus voluptatem quo
        in quaerat? Tempore, animi laudantium. Alias magni aut illum tempora
        harum ullam omnis, velit recusandae ab fuga atque reprehenderit
        laboriosam excepturi animi ad quia optio distinctio quam, maiores sunt
        enim voluptate voluptatum repellendus iure. Deserunt! Modi iure sit iste
        inventore adipisci mollitia ullam, eaque sequi. Delectus, ducimus.
        Quaerat sint eligendi atque, quia fuga itaque aliquam, repellendus sunt
        praesentium nobis distinctio eius minus assumenda? Sed, sequi? Illo,
        facilis explicabo! Facere, repudiandae vero? Dolorem, quidem laborum!
        Atque quae nostrum autem labore consequatur amet. Facere eum,
        consectetur voluptates dolores a cumque eligendi sunt, fugit nam
        reprehenderit animi nisi. In eos labore repellendus, molestias illo
        molestiae facilis veritatis soluta officia sapiente nulla provident
        animi. Error at ipsum cupiditate necessitatibus, qui dolores veniam,
        porro sapiente nesciunt ipsa consequuntur quidem fuga. Inventore illum
        quam, suscipit tempore ullam beatae voluptatibus hic quis dicta
        doloribus dolores perspiciatis rem recusandae odit fugit ea corrupti
        laudantium. Laborum fugit temporibus, esse ad officiis earum nam cumque.
        Doloribus omnis tenetur recusandae ducimus commodi provident, expedita
        tempora consectetur temporibus blanditiis molestiae nesciunt, reiciendis
        minima eveniet molestias! Deleniti quia repellat, dolorem hic qui fugit
        ratione itaque perspiciatis ex nihil. Ad voluptate quisquam illo, cum,
        quae ipsa repellat vitae nam quibusdam maiores architecto voluptates
        facere labore iste eius soluta cupiditate, ratione debitis? Laboriosam
        placeat, cum rerum esse vero blanditiis iusto. Doloremque aliquam earum
        ratione. Ab veritatis, quod corrupti quam expedita quibusdam recusandae
        non omnis sit tenetur magnam minus cumque reprehenderit iste nulla aut
        vel! Est architecto doloremque nam a molestias! Impedit ipsum autem
        itaque eum necessitatibus, quidem magni ab, deleniti et iste tempore
        molestias. Voluptates animi omnis autem, sequi recusandae, et hic odit
        tempora nihil ullam, rem vel corporis natus! Omnis est magnam itaque
        aliquam odio quos ipsum earum doloremque ducimus quaerat consequuntur
        officiis harum, labore ea excepturi nihil consectetur quidem. Odit ipsum
        veritatis quod ducimus eius excepturi ad fugiat? Nihil sequi hic
        mollitia, accusantium quis temporibus provident aspernatur ad, ab
        consequuntur dolores libero atque rem autem, eaque minus veritatis fuga
        praesentium ipsum eos. Quas minima doloremque neque sunt aspernatur?
        Quae, quo, harum, fugit nesciunt nisi molestiae unde minus sint facere
        vero consequatur molestias? Doloremque quas totam, tenetur quaerat
        repudiandae officiis neque hic distinctio perferendis alias culpa earum
        id cum? Consectetur obcaecati itaque cum quas a cumque doloribus
        eligendi vel architecto distinctio, quisquam nesciunt! Beatae, labore
        illum excepturi corrupti possimus vel deserunt sint esse mollitia at
        sunt, officiis reiciendis rerum? Officia dignissimos aliquid quibusdam
        optio nesciunt neque enim dolorum magni cumque labore quis dolore,
        eveniet accusantium libero, exercitationem maxime! Excepturi, rem
        repellendus. Beatae alias iste reiciendis sit unde, amet ratione!
        Provident laudantium ullam autem illo voluptate, similique possimus
        voluptatibus excepturi ipsam dicta voluptatum sapiente distinctio in
        consequuntur vel qui facere fugit. Impedit, nihil repudiandae molestias
        sed tempora iure exercitationem ea. Mollitia similique nobis minus unde
        aperiam ut? Quas reiciendis, sunt sequi doloribus error molestias ipsum
        non eos aspernatur impedit laudantium quo, praesentium maxime temporibus
        vel cumque ratione et sapiente eum? Repellendus assumenda,
        necessitatibus odio ex voluptate numquam neque sequi, molestias maiores
        pariatur minima! Dolor atque quod pariatur vero fugit ad. Rem magni
        facere sit dolore quaerat minima, animi laboriosam odit? Explicabo
        voluptatibus saepe quibusdam culpa fugit veniam sit magnam
        necessitatibus quia reiciendis? Consequatur repellat, pariatur quia
        culpa, architecto laudantium fugit aspernatur corporis ad dolores
        cupiditate neque quibusdam rem commodi quaerat! Dignissimos molestias
        veritatis autem tempora nobis dolore nam, similique beatae at. Vero,
        numquam nostrum corrupti recusandae rerum reprehenderit adipisci minus
        dicta molestias excepturi dolorum repudiandae cumque dignissimos
        accusantium. Tenetur, voluptas. Natus qui doloribus et veniam nihil
        reprehenderit doloremque accusamus voluptates dolor unde? Ab alias sint,
        deleniti totam dolores ipsa, vitae inventore aut, libero veniam
        recusandae in quibusdam id unde repellat! Laboriosam maxime autem
        tempore, alias aperiam quibusdam laborum. Officiis optio voluptatum
        consectetur, ea, ad quam dolores dolorem doloribus dolore recusandae,
        nesciunt totam eveniet reprehenderit magnam odit voluptatibus. Eligendi,
        modi nemo. Est, quaerat nostrum. Incidunt dolorem reprehenderit tempore
        repudiandae architecto praesentium quidem laudantium atque, facere magni
        similique distinctio nemo, nobis consequatur officiis voluptas quam et.
        Explicabo consequuntur saepe voluptatem fuga perferendis? Doloribus
        tempora quibusdam adipisci reiciendis, nesciunt architecto similique
        eligendi possimus, consectetur quo nemo inventore animi temporibus!
        Totam, tempore dolor, excepturi tempora ad laudantium quibusdam
        doloribus perferendis repudiandae adipisci alias qui. A earum excepturi
        reprehenderit distinctio ab quod autem doloremque, corrupti dicta
        laboriosam, explicabo obcaecati vel eaque doloribus voluptatum nam ut
        praesentium? Voluptatem repellat necessitatibus a fuga modi eum
        consequatur consectetur! Illo, perspiciatis maxime quam ducimus
        voluptatibus expedita accusantium tempore in fugit. Nisi, possimus!
        Deleniti odit iusto eveniet nostrum nisi ab ducimus, exercitationem
        aspernatur dignissimos ipsum eius temporibus ipsa soluta eum? Mollitia
        laborum magnam saepe modi, quidem autem provident eveniet quam atque
        incidunt eligendi accusamus molestiae eaque ratione dolore
        necessitatibus quis repudiandae, enim nostrum? Maxime qui amet fuga
        voluptatibus, iusto aperiam. Pariatur temporibus ex totam debitis nulla
        tenetur velit iusto non provident. Aspernatur repellat aperiam
        perspiciatis earum exercitationem tempore adipisci ratione consequuntur
        eveniet sit, est aut natus aliquam incidunt asperiores amet! Quibusdam
        aliquid maxime, porro impedit molestiae minus, dolorum, ex harum autem
        aspernatur laudantium tempora reprehenderit labore voluptatibus fugiat
        necessitatibus sit! Culpa placeat vero officiis sint exercitationem a ab
        temporibus sed. Labore optio odit eum voluptatibus nihil cupiditate
        animi at quo ratione quibusdam enim eius natus quidem a fugit, vero
        nostrum, ab eveniet iusto itaque, mollitia reprehenderit distinctio
        quaerat debitis. Ratione. Delectus, iusto quo sint dicta error
        praesentium a. Cumque sint nesciunt officia sequi aut in, dolor, amet
        beatae laudantium accusamus sapiente. Adipisci sed minima voluptatum
        velit animi, quo dicta qui? Excepturi accusantium mollitia explicabo hic
        fuga repellendus consectetur ab molestiae maxime illum atque eveniet
        suscipit, voluptates aut ipsum ullam sed animi, laboriosam est? Quisquam
        quis recusandae doloribus sint esse perspiciatis? Sit ipsam nihil
        veritatis non eligendi, earum voluptate, quasi sint nostrum quis
        dignissimos ad odio quibusdam quo laborum expedita quae tempora,
        deserunt inventore ducimus rem accusamus saepe reprehenderit. Odit, sed?
        Ea dolor mollitia doloremque neque laborum aliquid reprehenderit,
        deserunt fuga veniam rem voluptatibus adipisci iusto error porro
        asperiores delectus? Aspernatur aliquam voluptatum quaerat quam quasi ut
        assumenda voluptate praesentium pariatur? Facilis corporis eaque, dolore
        mollitia ducimus aspernatur alias quibusdam repudiandae quaerat autem
        laborum earum, distinctio ab impedit quidem at. Ab pariatur aliquam nisi
        ipsam. Pariatur eveniet optio vitae neque veniam? Fugiat aperiam totam
        expedita architecto, ea quam deleniti, doloribus magni, suscipit eveniet
        cum. Eaque quidem debitis sint perspiciatis consequuntur aliquam dolorum
        libero iure laudantium voluptate officiis magni, odit ea obcaecati! Est
        quasi repudiandae veniam, praesentium soluta ab impedit blanditiis alias
        modi odit architecto, accusantium inventore iure! Magnam minus obcaecati
        repudiandae, esse vel nam placeat beatae vero odit sequi officia
        impedit! Ipsum, sit esse architecto ipsa aliquam laboriosam at. Quaerat
        voluptatibus molestiae similique quae quidem modi quisquam enim cum
        deleniti explicabo suscipit nobis, iusto hic accusamus repellendus
        delectus ab nesciunt quam. Quaerat reprehenderit earum quae, iste ex,
        cum libero veritatis, itaque fuga laborum sunt neque? Nam soluta minima
        nihil, dolor eaque ipsum impedit quasi ipsa tempora quia! Quia beatae
        facilis in. Quos, eveniet autem vel molestiae consectetur cumque
        voluptates, explicabo obcaecati maxime odit iusto tenetur magni
        praesentium, repudiandae rerum animi reiciendis id rem hic totam error
        dicta repellendus? Aut, culpa soluta. Commodi perspiciatis laborum
        consequatur esse tenetur numquam non atque consequuntur mollitia labore
        officiis, est molestiae nobis ab vel molestias quod velit sint ducimus
        delectus. Exercitationem voluptates nam praesentium in alias. Enim ullam
        assumenda, voluptates asperiores doloribus minus nesciunt sed dolorem ad
        facere inventore accusantium facilis. Optio, ipsum magni vel asperiores
        est nemo ipsam laborum quia voluptatibus? Tempora cum nam architecto?
        Voluptas similique aspernatur praesentium aperiam tempore. Beatae
        molestias laborum ducimus aspernatur non, obcaecati culpa facilis
        temporibus dignissimos accusantium. Ea nisi, minus voluptatem recusandae
        neque consequuntur quos id. Inventore, eius sunt! Recusandae, culpa
        temporibus est cumque aliquid voluptas nulla magni sunt excepturi
        soluta. Minus perferendis et ullam error qui laboriosam ratione facilis
        voluptates porro, cumque, nesciunt tempore, animi quaerat iusto aut.
        Harum ducimus autem illum totam iusto perferendis labore possimus nobis.
        Obcaecati quae id ab odio, molestiae modi cumque quisquam voluptate iure
        eos quod? Maiores asperiores sint repellendus molestias. Vitae,
        reprehenderit? Assumenda, aspernatur totam? Minus ullam quo nobis
        explicabo quas enim pariatur tempore, tenetur atque aliquam impedit
        perspiciatis eaque repellat cupiditate nulla quaerat fugit non sapiente
        culpa vel debitis, accusamus iure. Incidunt sapiente veritatis numquam
        aspernatur magni dicta eligendi deleniti accusantium laboriosam, vel
        inventore magnam corporis ipsum aliquam, sed dolor asperiores eveniet
        fugiat alias deserunt! Quae dolorum ipsam mollitia tempore dolorem?
        Quidem aliquid, quos magni at cum officia natus, soluta voluptatum
        ratione obcaecati mollitia nesciunt. Consequatur ipsam accusamus minus
        in eveniet id architecto recusandae modi vero, voluptas ullam nesciunt!
        Cumque, possimus! Odit, maxime? Explicabo dignissimos provident
        consectetur omnis, praesentium magnam eum tenetur aperiam labore
        reiciendis odio minima fuga? Dolorum accusantium minima aliquam totam,
        magnam possimus eaque ratione, sed dolor quisquam architecto. Dicta,
        cumque delectus, quasi, dolore quod suscipit numquam vitae recusandae
        blanditiis ex ad eum! Quae quo in ullam aspernatur, minima laboriosam
        facere hic consectetur doloremque est distinctio praesentium minus illo?
        In, optio aspernatur. Odit facere recusandae consequatur quaerat magni,
        eius illo quod quia dolores velit error repellat repellendus possimus
        totam quasi molestias, ex, quos dignissimos fugit? Similique eius
        ducimus voluptatem! Culpa repellat pariatur veritatis, ipsum neque amet,
        saepe assumenda reiciendis corporis ea rem, obcaecati quidem in eligendi
        distinctio voluptatum delectus unde eaque maiores atque dolores omnis
        incidunt sed. Illo, excepturi! Repellat perspiciatis optio, dolores unde
        sint quos iusto accusantium velit sit fugiat pariatur rerum illum natus
        molestiae enim, hic aliquid, consectetur ullam provident temporibus ab
        eum voluptatibus labore. Quidem, atque? Placeat, harum corporis illo
        possimus velit eum omnis repudiandae, animi, sunt deserunt quam
        laboriosam quibusdam accusamus earum. Nulla placeat doloribus, delectus
        neque eaque accusantium minus reiciendis voluptas nam aspernatur
        cupiditate. Ipsa odit eligendi incidunt quis magni laborum atque ratione
        neque. Ratione eaque architecto facilis eveniet reiciendis deleniti sit
        esse minus nesciunt natus? Tempora iste consequuntur velit qui delectus
        harum eveniet. Provident, maiores! Labore nam nobis in vero quasi minima
        exercitationem rem ullam qui ut asperiores cupiditate fugit, aperiam
        magnam excepturi quod beatae pariatur enim aspernatur, deleniti
        laudantium maiores minus. Dolorum? Architecto similique pariatur modi,
        at ducimus adipisci neque qui incidunt consectetur asperiores deserunt
        libero dolore officiis, facilis quasi eligendi consequuntur sed, aliquam
        expedita vero. Magni quisquam vitae reprehenderit magnam eaque. Nemo
        repellat error blanditiis unde modi necessitatibus delectus, voluptatem
        alias illum, quos exercitationem magni cum distinctio eveniet assumenda!
        Modi dolor voluptatem soluta nobis amet suscipit odit iusto commodi
        voluptatibus in. Amet distinctio cumque dolore eius reprehenderit
        aspernatur numquam nesciunt quidem tempore, dolor dicta et nam corrupti
        beatae autem voluptates adipisci officia ab facilis! Pariatur alias
        facere ex ducimus asperiores. Consequatur? Perferendis ipsum a inventore
        quasi, nobis beatae harum nihil amet sequi, incidunt corrupti velit
        dolor magni assumenda, molestiae non molestias provident exercitationem
        doloremque quae nulla consequatur? Eius nisi cum labore. In fuga
        necessitatibus accusantium esse magnam explicabo ipsum saepe, nulla
        voluptate. Tenetur deleniti quibusdam nostrum corrupti quis, modi
        laudantium commodi, ut quod nulla libero sit mollitia consequatur
        voluptatem, eaque quaerat. Rem vero aliquid nemo iusto nesciunt, nostrum
        minima possimus provident quam, sed numquam. Voluptas expedita debitis
        unde inventore sint! Sed sequi accusantium quae dolores sit corporis id
        pariatur minima dolorum! Nam iure eaque atque tempora? Est non,
        perferendis illo praesentium necessitatibus eum eaque ullam cumque
        blanditiis aut dolorem magnam cum doloribus fugiat molestias tenetur
        sit, omnis maiores sapiente id officia. Neque assumenda esse alias!
        Earum quos voluptatem ipsa velit tenetur laboriosam fugit. Pariatur, quo
        laboriosam quos vitae inventore odio deleniti est eaque ipsum
        repellendus quas ipsa iusto eius commodi ab. Aliquid quis dignissimos
        iste harum consequuntur vero facilis tenetur, esse provident eaque,
        nostrum fugiat commodi laborum molestias id veritatis blanditiis
        cupiditate debitis quaerat ab atque. Doloribus ad totam nobis
        doloremque? Sed, quod! Architecto rerum officiis similique, aliquid
        repellat ab provident pariatur obcaecati! Praesentium libero saepe
        voluptatibus temporibus architecto! Necessitatibus, aliquam delectus?
        Architecto temporibus odio aspernatur quae fugiat vero. Aliquid,
        reiciendis. Velit voluptas fugiat illum, amet modi molestiae voluptatum
        aut! Explicabo quam dolorum in rerum atque nobis, a officia ipsa iure
        possimus, nisi consequuntur dignissimos architecto voluptatum tenetur
        ipsam sequi dolorem. Quo, eos ab aut facere obcaecati nobis autem
        aliquid eaque recusandae vero, iusto quia expedita itaque libero
        exercitationem sapiente sint unde excepturi quas dolorum architecto
        dignissimos. Vero qui voluptatem quis. Sit, ab harum. Quod tenetur nemo
        iure vero fugit quia nam ratione, similique quae cum, repudiandae
        dolores excepturi eius in quam odit illo enim natus ducimus? Mollitia
        minus autem alias! In, ab unde. Aliquam pariatur perferendis laborum
        debitis neque reiciendis fuga porro similique eius vitae cupiditate, sed
        mollitia quas amet nobis obcaecati eligendi quam culpa corporis
        reprehenderit ipsam expedita tenetur? Ab, explicabo obcaecati cupiditate
        tenetur corporis consectetur pariatur ad sint nulla debitis, atque unde,
        dolorem rerum. Porro libero vel voluptatibus nesciunt voluptatem
        temporibus sapiente hic accusantium veritatis? Placeat, tempore ullam!
        Provident sed quae tenetur, aut ducimus hic ad, incidunt eum blanditiis
        labore, voluptatibus ex nam rerum sunt cupiditate nulla ullam minus
        exercitationem doloribus. Sapiente, accusantium optio in doloribus
        expedita iste! Modi dolore dolores molestiae sequi sit quae, quaerat
        cupiditate neque sapiente quis delectus omnis quisquam, fuga adipisci
        minus sunt veritatis aliquid! Soluta quos odit, quo eligendi placeat
        quisquam rem tenetur! Repudiandae ratione numquam provident beatae
        pariatur molestiae rem velit incidunt distinctio minima porro, itaque
        perferendis consectetur, ipsa unde consequatur nobis maxime, magni vitae
        a alias! Voluptatibus quod natus odio atque! Porro itaque esse voluptas
        soluta magnam laborum ipsum ab possimus illo ut, quibusdam eius quaerat
        sed consequuntur quisquam omnis reprehenderit? Expedita exercitationem
        explicabo ipsum in molestias cum qui corrupti ullam. Maiores laudantium
        adipisci quis laborum omnis facere fugiat, dolor ex harum veniam,
        tempora corporis? Iusto iure doloremque nostrum nobis quae. Nam odio
        incidunt consectetur ratione similique nobis molestiae, quia totam!
        Perspiciatis odit porro voluptatibus perferendis fugiat neque, fugit
        quas sapiente dolor quod possimus quisquam ex voluptas modi a eum
        commodi dolores repellat quos maxime necessitatibus et magni consequatur
        nam. Vero. Debitis harum iusto, ullam officia dolorem, quis, veniam
        deleniti asperiores officiis autem doloribus in distinctio perferendis
        corporis aliquid omnis? Deleniti quidem sequi magnam, voluptates sed
        ipsum obcaecati tempora. Cupiditate, illo. Blanditiis quam dolorem sint
        assumenda in sapiente minus sunt commodi repudiandae alias, delectus
        doloribus maiores aut eos, vero tenetur expedita eligendi facere
        voluptatibus debitis pariatur quas. Cupiditate quia totam nulla?
        Deleniti veniam assumenda, quos culpa nulla nobis laudantium dolorem
        eveniet vitae explicabo beatae consectetur illum quod provident facilis.
        Aliquam quidem, aspernatur libero esse ullam sit optio deserunt
        provident voluptatem consectetur. Quibusdam laudantium hic itaque
        voluptates nulla quae nesciunt ex totam impedit autem esse repudiandae
        officiis laboriosam odio in unde minus explicabo, consectetur voluptas
        vitae aliquam iusto. Magnam a odit earum. Eius a hic sapiente suscipit
        repellendus iure accusantium, pariatur consectetur nesciunt deleniti
        beatae repudiandae quidem ex amet! Harum voluptates similique quo
        dignissimos, eaque ad quisquam eum dolor et tempore facere. Fuga alias
        atque nisi, enim optio nobis velit ipsum! Nostrum quasi aliquam rerum
        cupiditate temporibus esse! Assumenda, eligendi itaque ipsam minus,
        tenetur illum delectus earum quis accusamus natus perferendis ipsum.
        Minima ipsum fugit aut voluptates asperiores obcaecati excepturi, ut
        deleniti cupiditate, quas, dolor et sequi! Facilis ullam praesentium
        odio. Ea aliquid sit saepe provident a harum eius recusandae quidem
        soluta? In, amet minima sed repellendus nobis, doloremque reiciendis eum
        a laudantium quaerat perferendis culpa quam pariatur molestias sunt
        ullam voluptates autem cum dignissimos? Deleniti iste corporis libero.
        Beatae, magni tempore? Velit vel voluptates similique voluptatem! Nobis
        dolorem praesentium ea tempore nihil consectetur. Nostrum optio deserunt
        ullam, dicta officiis unde minima, vel ipsa, veniam ea reprehenderit
        fugit similique suscipit dolor voluptate? Earum assumenda quae inventore
        culpa voluptatibus maiores, est sequi dolore, voluptate dolorem nobis
        ipsa minima reiciendis quam fuga, iusto porro ducimus in minus
        consectetur. Error hic suscipit fugit aut quo. Nam hic cumque ad
        perspiciatis nobis aut minima quo, molestiae eius. Quis facilis veniam
        nesciunt esse maxime ullam, dolore molestias repellendus aliquid
        architecto. Quaerat nostrum incidunt distinctio? Tempora, voluptatum
        quibusdam. Delectus qui libero velit atque odit, enim officia
        voluptatum, quasi autem obcaecati, harum sed similique nobis a nesciunt
        repellendus blanditiis excepturi sit assumenda voluptatem! Ullam
        perferendis quae officiis fugiat quasi! Fuga itaque tempora reiciendis
        animi repellendus pariatur debitis perspiciatis quo veniam, tenetur,
        saepe quam tempore earum voluptas eaque modi non praesentium alias magni
        ea eius, hic dolor. Minima, delectus facilis. Minus nobis soluta ad fuga
        ipsa illo alias exercitationem eos placeat aut similique libero
        asperiores officiis voluptatem ratione deserunt consequuntur earum autem
        nam debitis, eveniet rerum dolorem eligendi! Ad, officiis! Esse, quo
        perferendis architecto, voluptatem nostrum nisi delectus aperiam
        corporis eos velit totam! Tempora, quas et! Expedita modi repellat
        repellendus vel nobis ipsum velit amet, voluptates molestiae?
        Repellendus, debitis tempore.
      </p>
    </div>
  );
};

export default ThemeCustomHook;
