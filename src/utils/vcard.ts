/**
 * Generates and triggers a real download of a vCard file (.vcf)
 * representing Taro Yamada's professional contact info.
 */
export function downloadVCard() {
  const vcardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:山田 太郎 (Taro Yamada)',
    'N:Yamada;Taro;;;',
    'ORG:Taro Yamada Design Studio',
    'TITLE:Creative Director / Web Designer',
    'TEL;TYPE=CELL,VOICE:+81-90-1234-5678',
    'EMAIL;TYPE=PREF,INTERNET:taro.yamada@example.com',
    'URL:https://www.tarodesign.com',
    'URL;TYPE=INSTAGRAM:https://instagram.com',
    'URL;TYPE=LINKEDIN:https://linkedin.com',
    'NOTE:Creative Director and UI/UX Designer based in Tokyo\\, Japan. Award-winning Japanese minimalist aesthetics fused with luxury digital design.',
    'REV:2026-05-30T00:00:FFZ',
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Taro_Yamada_Contact.vcf');
  document.body.appendChild(link);
  link.click();
  
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
