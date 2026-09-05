package com.notastrinitario.app.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "app")
public class AppProperties {
    private Jwt jwt = new Jwt();
    private Firebase firebase = new Firebase();
    private Institution institution = new Institution();
    private Ai ai = new Ai();

    public static class Jwt {
        private String secret = "a1b8aeb3b0cc2a4edf36f8fdc905bf730443be2cc98d689f6fc9c1e1d3c28efedf5701d17bf2de7bbf44f1693f8570dd015dad1500e744ea02869354b9042eca";
        private long expiration = 604800000;
        private long refreshExpiration = 2592000000L;

        public String getSecret() { return secret; }
        public void setSecret(String secret) { this.secret = secret; }
        public long getExpiration() { return expiration; }
        public void setExpiration(long expiration) { this.expiration = expiration; }
        public long getRefreshExpiration() { return refreshExpiration; }
        public void setRefreshExpiration(long refreshExpiration) { this.refreshExpiration = refreshExpiration; }
    }

    public static class Firebase {
        private boolean enabled = false;
        private String serviceAccountFile = "firebase-service-account.json";

        public boolean isEnabled() { return enabled; }
        public void setEnabled(boolean enabled) { this.enabled = enabled; }
        public String getServiceAccountFile() { return serviceAccountFile; }
        public void setServiceAccountFile(String serviceAccountFile) { this.serviceAccountFile = serviceAccountFile; }
    }

    public static class Institution {
        private String name = "Corporacion Colegio Trinitario";
        private String address = "Cra 81C #22-124, San Fernando, Cartagena de Indias, Provincia de Cartagena, Bolivar, Colombia";
        private String phone = "56539572";
        private String logo = "/img/logo.png";

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public String getAddress() { return address; }
        public void setAddress(String address) { this.address = address; }
        public String getPhone() { return phone; }
        public void setPhone(String phone) { this.phone = phone; }
        public String getLogo() { return logo; }
        public void setLogo(String logo) { this.logo = logo; }
    }

    public static class Ai {
        private String mistralApiKey = "U31NiKLM8WVUROCaZOLzV8eaEbiwwb45";
        private String mistralModel = "mistral-large-2512";
        private String mistralUrl = "https://api.mistral.ai/v1/chat/completions";

        public String getMistralApiKey() { return mistralApiKey; }
        public void setMistralApiKey(String mistralApiKey) { this.mistralApiKey = mistralApiKey; }
        public String getMistralModel() { return mistralModel; }
        public void setMistralModel(String mistralModel) { this.mistralModel = mistralModel; }
        public String getMistralUrl() { return mistralUrl; }
        public void setMistralUrl(String mistralUrl) { this.mistralUrl = mistralUrl; }
    }

    public Jwt getJwt() { return jwt; }
    public void setJwt(Jwt jwt) { this.jwt = jwt; }
    public Firebase getFirebase() { return firebase; }
    public void setFirebase(Firebase firebase) { this.firebase = firebase; }
    public Institution getInstitution() { return institution; }
    public void setInstitution(Institution institution) { this.institution = institution; }
    public Ai getAi() { return ai; }
    public void setAi(Ai ai) { this.ai = ai; }
}
