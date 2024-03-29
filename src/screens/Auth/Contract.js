import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './Login/styles';

export function Contract(props) {
  const { onPress } = props;
  return (
    <View style={styles.popupWrapper}>
      <TouchableOpacity style={styles.popupClose} onPress={onPress}>
        <Text style={styles.popupCloseTitle}>Kapat</Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.popupContent}>
        <Text style={styles.h1}>MOBİL UYGULAMA GİZLİLİK BİLDİRİMİ</Text>
        <Text style={styles.version}>Sürüm, 18 Temmuz 2019</Text>
        <Text style={styles.description}>Tüm Kullanıcılarımızın gizliliği bizim için çok önemlidir. Bir Uygulama Kullanıcısı olarak Hizmetimizi kullandığınızda, (Uygulama Yayıncısı olarak) Kişisel Verilerinizi işleriz. Bu Gizlilik Bildirimi, Kişisel Verilerinizi nasıl koruduğumuzu ve işleme koyduğumuzu açıklar. Dikkatlice okumanızı öneririz. </Text>
        <View style={styles.mt10} />
        <Text style={styles.h3}>1. Bu Gizlilik Bildiriminde ne belirtilmiştir?</Text>
        <Text style={styles.description}>Bu Gizlilik Bildirimindeki bölümler size aşağıdakiler hakkında bilgi verir:</Text>
        <View style={styles.mt10} />
        <Text style={[styles.description, styles.circle]}>• İşlenen Kişisel Verilerin türleri,</Text>
        <Text style={[styles.description, styles.circle]}>• Kişisel Verilerin işlenme amaçları,</Text>
        <Text style={[styles.description, styles.circle]}>• Kişisel Verilerin işlendiği yerler,</Text>
        <Text style={[styles.description, styles.circle]}>• Kişisel Verileri korumak için uygulanan güvenlik önlemleri,</Text>
        <Text style={[styles.description, styles.circle]}>• Üçüncü şahıslarla ilgili sorumluluk sınırları,</Text>
        <Text style={[styles.description, styles.circle]}>• Kişisel Verilerinizi görüntüleme, değiştirme ve silme,</Text>
        <Text style={[styles.description, styles.circle]}>• Bu Gizlilik Bildiriminde yapılan değişiklikler;</Text>
        <Text style={[styles.description, styles.circle]}>• Sorunuz veya açıklamalarınız varsa ne yapacaksınız?</Text>
        <View style={styles.mt10} />
        <Text style={styles.h3}>2. İşlenen Kişisel Verilerin türleri</Text>
        <Text style={[styles.description, styles.bold]}>A. Hizmetimiz tarafından kullanılan Kişisel Veriler</Text>
        <Text style={styles.description}>Hizmetimizi geliştirmek için Anonim Verileri kullanırız. Bu bilgiler, Hizmet aracılığıyla kamuya açıklanmayacaktır.</Text>
        <View style={styles.mt10} />
        <Text style={[styles.description, styles.bold]}>B. Otomatik olarak oluşturulan bilgiler </Text>
        <Text style={styles.description}>Çoğu diğer web siteleri ve çevrimiçi hizmetler gibi, Uygulamayı nasıl kullandığınızla ilgili olarak otomatik olarak üretilen bilgileri toplar ve işleriz. Toplanan bilgiler, ip adresinizi ve / veya benzersiz cihaz kimliğinizi içerir.</Text>
        <View style={styles.mt10} />
        <Text style={styles.description}>Özellikle katılmayı seçerseniz, Uygulama, coğrafi konum bilgilerinizi toplayabilir. Her durumda, coğrafi konum bilginizin alınmasını mobil cihazınızın ayarlarından engelleyebilirsiniz.</Text>
        <View style={styles.mt10} />
        <Text style={styles.description}>Sosyal ağ hesabınızdan bilgi erişimi ve toplama izni vermeyi özellikle tercih ederseniz, sosyal ağ hesabınızdaki temel kişisel bilgileriniz (adınız ve e-posta adresiniz gibi) ve ayrıca sosyal ağ kullanıcı kimliği ( şifreniz değil ) ve Uygulama aracılığıyla paylaştığınız yayınlarla ilgili parametreler. Erişilebilen ve alınabilecek bilgileri kontrol etmek için hesabınızın gizlilik tercihlerini nasıl ayarlayabileceğiniz hakkında daha fazla bilgi için lütfen sosyal ağın gizlilik politikasına bakın.</Text>
        <View style={styles.mt10} />
        <Text style={styles.description}>Bu, aynı zamanda, Uygulamayı nasıl kullandığınıza ilişkin otomatik olarak oluşturulmuş bilgilerle ilgili olarak gerçekleşir. Bu tür bilgiler, Uygulamanın nasıl kullanıldığını daha iyi anlamamıza ve bir kullanıcı olarak ihtiyacınıza uygun hizmet üretmemize yardımcı olur.</Text>
        <View style={styles.mt10} />
        <Text style={styles.description}>Uygulama içindeki kullanıcı yetkilendirme özelliklerini etkinleştirirseniz, aşağıdaki ek bilgiler saklanır:</Text>
        <View style={styles.mt10} />
        <Text style={[styles.description, styles.circle]}>• İsim,</Text>
        <Text style={[styles.description, styles.circle]}>• E-posta,</Text>
        <Text style={[styles.description, styles.circle]}>• Telefon numarası (isteğe bağlı);</Text>
        <Text style={[styles.description, styles.circle]}>• Facebook, Twitter, Google+ veya LinkedIn gibi harici bir sağlayıcı tarafından gönderilen ek profil bilgileri.</Text>
        <View style={styles.mt10} />
        <Text style={styles.description}>Uygulama sahibine, uygulamanın kullanımı hakkında bilgi vermek için aşağıdaki (bilinmeyen) bilgileri de topluyoruz:</Text>
        <View style={styles.mt10} />
        <Text style={[styles.description, styles.circle]}>• Uygulamayı açtığınız an,</Text>
        <Text style={[styles.description, styles.circle]}>• Uygulamanın içinde açtığınız ekranlar ve bu ekranlarda harcadığınız süre,</Text>
        <Text style={[styles.description, styles.circle]}>• Uygulamadan ayrıldığınız an.</Text>
        <View style={styles.mt10} />
        <Text style={styles.description}>Not: kullanıcı yetkilendirme özellikleri etkinleştirilmişse, giriş yaptığınızda anonim bilgileri sizin bilgilerinizle ilişkilendirebiliriz.</Text>
        <View style={styles.mt10} />
        <Text style={styles.description}>Eğer uygulamada anlık bildirim reklamları aktifse, uygulama ile entegre çalışan <Text style={styles.bold}>BleshSDK</Text> hakkındaki bilgiler aşağıda sunulmaktadır.</Text>
        <View style={styles.mt10} />
        <Text style={[styles.description, styles.circle]}>• BleshSDK vasıtasıyla Kullanıcılar’ın bildirim izni durumu, bluetooth durum bilgisi, cihaz bilgileri, reklam tanıtıcısı (IDFA), konum, operatör, yüklü uygulama listesi bilgilerine erişilmekte olup sağlanan bu bilgilerin gizliliği için gerekli güvenlik önlemleri alınmaktadır.</Text>
        <View style={styles.mt10} />
        <Text style={[styles.description, styles.circle]}>• Kullanıcı’nın, kendisine iletilen kampanya görüntüsünü fotoğraf albümüne kaydetmek istemesi durumunda, Kullanıcı’nın fotoğraf albümü ve kamerasına erişilmekte ve ekran görüntüsü fotoğraf albümüne kaydedilmektedir.</Text>
        <View style={styles.mt10} />
        <Text style={[styles.description, styles.circle]}>•	Bilgiler yalnızca Kullanıcı’nın izin verdiği ölçüde Uygulama üzerinden anlık bildirimler gönderme amacı kapsamında, güvenli şekilde ve sadece gereken süre boyunca kullanılmaktadır. Bilgiler yalnızca söz konusu amaçların gerçekleştirilmesi için üçüncü partiler ile paylaşılmakta olup bu kapsam dışında bilgilerin yayınlanması ve ifşa edilmesine izin verilmemektedir.</Text>
        <View style={styles.mt10} />
        <Text style={[styles.description, styles.bold]}>C. Belirli Bilgiler</Text>
        <Text style={styles.description}>Size sadakat kartı, haber bültenleri, reklamcılık gibi bazı etkinliklerle başvurmanız istenebilir; bu durumda bazı kişisel bilgiler istenir. Bu bilgiler, hizmetimizin (üçüncü şahıslar dahil) veritabanında saklanır ve bizimle paylaşılacaktır.</Text>
        <View style={styles.mt10} />
        <Text style={styles.description}>Uygulamadaki fotoğraflar da dahil olmak üzere veri yüklediğinizde, bu paylaşılacak ve uygulamanın diğer tüm kullanıcıları tarafından görülebilecektir.</Text>
        <View style={styles.mt10} />
        <Text style={styles.h3}>3. Kişisel Verilerin işlenme amaçları</Text>
        <Text style={[styles.description, styles.bold]}>A. Amaçlar</Text>
        <View style={styles.mt10} />
        <Text style={styles.description}>Taraflar Kişisel Verileri aşağıdaki amaçlarla işlemektedir:</Text>
        <View style={styles.mt10} />
        <Text style={[styles.description, styles.circle]}>• Hizmeti kullanabilmenizi sağlamak için,</Text>
        <Text style={[styles.description, styles.circle]}>• Hizmetimizle ilgili bilgileri güncel tutmak için,</Text>
        <Text style={[styles.description, styles.circle]}>• Hizmetin iyileştirilmesi ve/veya özelleştirilmesi için,</Text>
        <Text style={[styles.description, styles.circle]}>• Sizi tanımlamak ve/veya Hizmeti özelleştirmek için,</Text>
        <Text style={[styles.description, styles.circle]}>• Sizi tanımak ve dolandırıcılığı önlemek için,</Text>
        <Text style={[styles.description, styles.circle]}>• Destek sağlamak için,</Text>
        <Text style={[styles.description, styles.circle]}>• Kişisel Verilerinizi, bizden bunu talep ettiğiniz takdirde veya yasal olarak yükümlü olduğumuz durumlarda, üçüncü şahıslara iletmek.</Text>
        <View style={styles.mt10} />
        <Text style={[styles.description, styles.bold]}>B. Kişisel Verilerin üçüncü şahıslara iletilmesi</Text>
        <View style={styles.mt10} />
        <Text style={styles.description}>Sizden önceden izin alınmaksızın Kişisel Verilerinizi üçüncü şahıslara satmamaktayız, satmıyor veya kiralamıyoruz. Bununla birlikte, Ücretli Hizmetlerle ilgili ödeme sağlayıcıları aracılığıyla ödeme yapmak gibi Kişisel Verilerinizi size sağlama veya talimatları yerine getirmeniz açısından şart olduğu durumlarda,</Text>
        <Text style={styles.description}>Kişisel Verilerinizi üçüncü taraflara sağlayabiliriz.</Text>
        <View style={styles.mt10} />
        <Text style={styles.description}>Uygun olduğunu düşündüğümüz şekilde Hizmet'in bu tür amaçlar için üçüncü taraflara kullanımı hakkında "toplu anonim veriler" sağlayabiliriz. "Toplam anonim veriler", size geri gönderilemeyen ve bu nedenle Kişisel Veriler olarak sayılmayan verilerdir. Örneğin, Kullanıcıların Hizmeti nasıl kullandığını daha iyi anlamak için toplu anonim verileri kullanabiliriz.</Text>
        <View style={styles.mt10} />
        <Text style={styles.description}>Üçüncü bir tarafa geçtiğimiz veya bir üçüncü tarafla birleştiğimiz veya bir yeniden yapılandırmaya tabi olduğumuz durumda, Kişisel Verileriniz de üçüncü kişilere açıklanabilir ve / veya bu üçüncü kişiye devredilebilir. Bu üçüncü taraf, Kişisel Verileri ve bize sağladığınız diğer bilgileri kullanmaya devam etme hakkına sahip olacak.</Text>
        <View style={styles.mt10} />
        <Text style={styles.description}>Kişisel Verilerinizi, iyi niyetle, bir mahkeme kararı, halen devam eden adli işlem, cezai veya sivil mahkeme celbi veya kolluk kuvveti makamları tarafından verilen diğer yasal işlem veya taleplere uymanız gerektiğine inandığımız yerlerde ifşa edebiliriz veya egzersiz yapabiliriz Yasal hakları veya yasal iddialara karşı savunmak.</Text>
        <Text style={styles.h3}>4. Kişisel Verilerin işlendiği yerler</Text>
        <Text style={styles.description}>Hizmet kapsamında işlenen verilerin tutulduğu veri merkezleri değişik bölgelerde bulunmaktadır., Türkiye, İrlanda, Hollanda, Amerika Birleşik Devletleri bölgelerinde yer alan barındırma hizmetleri kullanılarak sağlanmaktadır. Bununla birlikte, işlenen Kişisel Veriler, bu ülkeler ve bölgeler dışında bir ülkede bulunan muhafaza sunucularına aktarılabilir ve depolanabilir. Kişisel Verilerinizin güvenli bir şekilde ve bu gizlilik politikasına uygun şekilde kullanılmasını sağlamak için makul ölçüde gerekli tüm adımları atacağız.</Text>
        <Text style={styles.h3}>5. Kişisel Verileri korumak için hangi güvenlik önlemleri uygulanmaktadır?</Text>
        <Text style={styles.description}>Verilerinizin güvenliği ve diğer Kullanıcıların güvenliği bizim için çok önemlidir. Kişisel Verilerinizi kayıp ya da herhangi bir yasadışı işleme karşı korumak için teknik ve organizasyonel önlemler aldık. Aşağıdaki tedbirleri uyguladık: sunucularımızı güvenlik duvarları, SSL bağlantıları ve hassas verilerin şifrelenmesi yoluyla koruma. Bu liste ayrıntılı değildir.</Text>
        <Text style={styles.h3}>6. Üçüncü şahıslarla ilgili sorumluluk sınırları</Text>
        <Text style={styles.description}>Hizmetimiz üçüncü taraflar tarafından sunulan hizmetler ve ürünler ve / veya ortakların, reklam verenlerin ve diğer üçüncü tarafların web sitelerine veya hizmetlerine köprüler içerebilir.</Text>
        <View style={styles.mt10} />
        <Text style={styles.description}>Tarafların, bu üçüncü tarafların içeriği, web siteleri veya hizmetleri üzerinde herhangi bir kontrolü veya etkisi yoktur. Üçüncü kişi web sitelerinin ve hizmetlerinin kullanımı için farklı gizlilik politikaları uygulanabilir. Bu Gizlilik Beyanı, yalnızca taraflar tarafından Hizmeti kendi amaçları doğrultusunda kullanmanız yoluyla elde edilen Kişisel Verilerle ilgilidir. Taraflar, üçüncü taraf web sitelerinin ve hizmetlerin içeriği, uygulamaları veya işletilmesi ile ilgili herhangi bir sorumluluk kabul etmez.</Text>
        <Text style={styles.h3}>7. Kişisel Verileri Görüntüleme ve Silme</Text>
        <Text style={styles.description}>Uygulamayı kullanarak toplanan kişisel bilgilere e-posta yoluyla bizimle iletişime geçmek veya silmek için bir istek gönderebilirsiniz. Kimliğinizi doğrulamak için ek bilgi sağlamanız istenebilir.</Text>
        <Text style={styles.h3}>8. Çocuk gizliliği</Text>
        <Text style={styles.description}>Çocuklarla ilgili kişisel bilgiler bilerek veya kasıtlı olarak toplanmamaktadır.</Text>
        <Text style={styles.h3}>9. Güvenlik</Text>
        <Text style={styles.description}>Kişisel bilgilerinizin güvenliğini sağlamak, hasar riskini en aza indirmek, bilgi kaybı ve yetkisiz erişimden veya bilgiyi kullanmak için önlemler uygulanmaktadır. Bununla birlikte, bu tedbirler mutlak bilgi güvenliği sağlayamamaktadır. Dolayısıyla, kişisel bilgilerinizin güvenliğini sağlamak için çaba sarf edilir, ancak bu garanti edilmez ve Uygulamanın ve ilgili veritabanlarının herhangi bir haksız davranış, arıza, izinsiz engeller veya erişim veya diğer kötüye kullanım ve kötüye kullanımdan muaf olacağını makul bir şekilde bekleyemezsiniz.</Text>
        <Text style={styles.h3}>10. Bu Gizlilik Bildiriminde Yapılan Değişiklikler</Text>
        <Text style={styles.description}>Bu Beyan, herhangi bir zamanda güncellenebilir. Taraflar, Gizlilik Bildirimi'nin güncellenmiş bir sürümünü Hizmet aracılığıyla yayınlayacaktır. Taraflar, bu Gizlilik Bildirimi'nde yapacağı değişikliklerden haberdar olmak ve tarafların Kişisel Verilerinizi nasıl koruma altına alacakları konusunda bilgi sahibi olmak için bu sayfayı zaman zaman kontrol etmenizi önerir. Bu Gizlilik Bildirimini periyodik olarak gözden geçirmek ve güncellemeler hakkında bilgi sahibi olmak sizin sorumluluğunuzdadır ve kabul ve taahhüt eder.</Text>
        <View style={styles.mt10} />
        <Text style={styles.description}>Bu Bildirimde yapılan değişikliklerin herhangi birine bağlı kalmayı kabul etmektesiniz. Değişiklik yürürlüğe girdikten sonra Uygulamayı kullanmaya devam etmeniz, değiştirilen Bildirim'i kabul ettiğinizi gösterecektir. Değiştirilen Bildirimi kabul etmiyorsanız, Uygulamayı kaldırmanız ve onu daha fazla kullanmaktan kaçınmanız gerekir.</Text>
        <Text style={styles.h3}>11. Herhangi bir sorunuz ya da açıklamalarınız varsa ne yapacaksınız?</Text>
        <Text style={styles.description}>Bu Gizlilik Bildirimi ile ilgili herhangi bir sorunuz veya açıklamalarınız varsa, lütfen bir e-posta göndererek bizimle iletişime geçin.</Text>
        <View style={styles.mt10} />
        <Text style={styles.description}>Bu Gizlilik Bildirimi son olarak 10 Nisan 2019 tarihinde güncellendi.</Text>
        <View style={styles.mt10} />
      </ScrollView>
    </View>
  );
}

export default Contract;