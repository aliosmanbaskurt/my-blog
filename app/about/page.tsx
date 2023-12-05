import React from "react";
import MyProfilePic from "../components/Profile";
import { Card, Text, Inset, Strong, Heading } from "@radix-ui/themes";

function About() {
  return (
    <div className="  text-center">
      <MyProfilePic />
      <Heading size="8">Ali Osman Başkurt</Heading>
      <p className="  mt-2 font-bold">Bilişim Teknolojileri Öğretmeni</p>
      <p className="  mt-2">Abdülhamit Han Çok Programlı Anadolu Lisesi</p>

      <div className="grid sm:flex justify-center mt-8 gap-4">
        <Card size="2" style={{ maxWidth: 240 }}>
          <Inset clip="padding-box" side="top" pb="current">
            <img
              src="/images/duzce.png"
              alt="Bold typography"
              style={{
                display: "block",
                objectFit: "fill",
                width: "100%",
                height: 140,
                backgroundColor: "var(--gray-5)",
              }}
            />
          </Inset>
          <hr />
          <Text as="p" size="3">
            <Strong>Düzce Üniversitesi</Strong> Teknik Eğitim Fakültesi
            Bilgisayar Öğretmenliği/Eğitimi
          </Text>
        </Card>
        <Card size="2" style={{ maxWidth: 240 }}>
          <Inset clip="padding-box" side="top" pb="current">
            <img
              src="/images/cbu_yan.jpg"
              alt="Bold typography"
              style={{
                display: "block",
                objectFit: "fill",
                width: "100%",
                height: 140,
                backgroundColor: "var(--gray-5)",
              }}
            />
          </Inset>
          <Text as="p" size="3">
            <Strong>Manisa Celal Bayar Üniversitesi</Strong> Hasan Ferdi
            Turgutlu Teknoloji Fakültesi Yazılım Mühendisliği
          </Text>
        </Card>
      </div>
    </div>
  );
}

export default About;
