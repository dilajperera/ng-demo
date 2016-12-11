package vipe.demo;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import vipe.demo.configuration.security.AuthorizationServerConfig;
import vipe.demo.configuration.JPAConfiguration;
import vipe.demo.configuration.security.LoginSecurityConfig;
import vipe.demo.configuration.security.ResourceServerConfig;

@Configuration
@Import(value = { JPAConfiguration.class, LoginSecurityConfig.class , AuthorizationServerConfig.class, ResourceServerConfig.class})
public class RootApplicationContextConfig {

}
